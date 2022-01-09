const path = require('path')
const router = require('express').Router()
const multer = require('multer')
const mongoose = require('mongoose')
const { GridFsStorage } = require('multer-gridfs-storage')
const url = process.env.MONGO_URI

const composer = require(path.join(__dirname, '..', 'middleware', 'composer'))

const connection = mongoose.createConnection(url)

const storage = new GridFsStorage({
	url,
	file: (req, file) => {
		if (['image/png', 'image/jpeg'].indexOf(file.mimetype) > -1)
			return { bucketName: 'images' }
		else return null
	},
})

const store = multer({
	storage,
	limits: { fileSize: 20 * 10e6 },
	fileFilter: (req, file, cb) => {
		const filetypes = /jpeg|jpg|png|gif/
		const extname = filetypes.test(
			path.extname(file.originalname).toLowerCase()
		)
		const mimetype = filetypes.test(file.mimetype)

		if (mimetype && extname) return cb(null, true)

		cb('filetype')
	},
})

let gfs
connection.once('open', () => {
	gfs = new mongoose.mongo.GridFSBucket(connection.db, {
		bucketName: 'images',
	})
})

const uploadMiddleware = (req, res, next) => {
	const upload = store.single('image')

	upload(req, res, (err) => {
		if (err) {
			if (err instanceof multer.MulterError)
				return res.status(400).json({ error: 'file too large' })

			if (err === 'filetype')
				return res.status(400).json({ error: 'image files only' })

			return res.sendStatus(500)
		}

		next()
	})
}

router.post('/', composer, uploadMiddleware, async (req, res) => {
	try {
		res.send(req.file)
	} catch (err) {
		res.status(500).send('server error')
	}
})

router.get('/:image_id', ({ params: { image_id } }, res) => {
	if (!image_id || image_id === 'undefined')
		return res.status(400).json({ error: 'no image id' })

	const _id = new mongoose.Types.ObjectId(image_id)

	gfs.find({ _id }).toArray((err, files) => {
		if (!files || !files.length)
			return res.status(400).json({ error: 'no files found' })

		gfs.openDownloadStream(_id).pipe(res)
	})
})

module.exports = router
