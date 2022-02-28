const router = require('express').Router()
const fs = require('fs/promises')
const path = require('path')
const Handlebars = require('handlebars')
const sendMail = require(path.join(__dirname, '..', 'mail'))

router.post('/', async (req, res) => {
	try {
		const html = await fs.readFile(
			path.join(__dirname, '..', 'formReceipt.html')
		)
		const template = Handlebars.compile(html.toString())
		const temlpateOutput = template(req.body)

		sendMail({
			to: 'allsiding@telus.net',
			subject: 'Allrose Exteriors - Confirmation of Submission',
			html: temlpateOutput,
		})

		res.json({ msg: 'form submitted' })
	} catch (err) {
		console.error(err)
		res.sendStatus(500)
	}
})

module.exports = router
