const router = require('express').Router()
const path = require('path')

const Page = require(path.join(__dirname, '..', 'models', 'page'))

router.get('/', async (req, res) => {
	try {
		const pages = await Page.find()

		if (!pages) res.status(404).json({ error: 'no pages found' })

		res.json(pages)
	} catch (err) {
		console.error(err)
		res.sendStatus(500)
	}
})

router.patch('/:page_id', async (req, res) => {
	try {
		const token = req.header('x-auth-token')

		if (!token) return res.sendStatus(401)
		if (token !== process.env.JSON_COMPOSER_SECRET)
			return res.sendStatus(403)

		const page = await Page.findByIdAndUpdate(req.body._id, {
			$set: req.body,
		})

		res.json(page)
	} catch (err) {
		console.error(err)
		res.sendStatus(500)
	}
})

module.exports = router
