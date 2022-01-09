const router = require('express').Router()
const path = require('path')

const composer = require(path.join(__dirname, '..', 'middleware', 'composer'))

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

router.patch('/:page_id', composer, async (req, res) => {
	try {
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
