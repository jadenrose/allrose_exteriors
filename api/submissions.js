const router = require('express').Router()
const { collection, addDoc } = require('firebase/firestore')
const fs = require('fs/promises')
const path = require('path')
const Handlebars = require('handlebars')

const db = require('../firebase').fireStoreDB()

router.post('/', async (req, res) => {
	try {
		await addDoc(collection(db, 'submissions'), {
			...req.body,
			submitted: new Date(),
		})

		const html = await fs.readFile(
			path.join(__dirname, '..', 'formReceipt.html')
		)
		const template = Handlebars.compile(html.toString())
		const temlpateOutput = template(req.body)

		await addDoc(collection(db, 'mail'), {
			to: req.body.email,
			message: {
				subject: 'Allrose Exteriors - Confirmation',
				html: temlpateOutput,
			},
		})

		res.json({ msg: 'form submitted' })
	} catch (err) {
		console.error(err)
		res.sendStatus(500)
	}
})

module.exports = router
