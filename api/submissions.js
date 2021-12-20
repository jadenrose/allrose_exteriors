const router = require('express').Router()
const fs = require('fs/promises')
const path = require('path')
const Handlebars = require('handlebars')

const smtp = require('../smtp')
const Submission = require('../models/submission')

router.post('/', async (req, res) => {
	try {
		const submission = new Submission(req.body)

		await submission.save()

		const mailer = await smtp()

		const html = await fs.readFile(
			path.join(__dirname, '..', 'formReceipt.html')
		)

		const template = Handlebars.compile(html.toString())

		const result = template(req.body)

		await mailer.sendMail({
			from: process.env.SMTP_EMAIL,
			to: req.body.email,
			subject: 'Allrose Exteriors - Confirmation',
			html: result,
		})

		res.json(submission)
	} catch (err) {
		console.error(err)
		res.sendStatus(500)
	}
})

module.exports = router
