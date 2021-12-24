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
		res.status(500).send('server error')
	}
})

module.exports = router
