const router = require('express').Router()

const page = require('../models/page')

router.get('/', async (req, res) => {
	try {
		const pages = await page.find()

		if (!pages) res.status(404).json({ error: 'no pages found' })

		res.json(pages)
	} catch (err) {
		console.error(err)
		res.status(500).send('server error')
	}
})

module.exports = router
