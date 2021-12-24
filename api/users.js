const router = require('express').Router()
const path = require('path')

const User = require(path.join(__dirname, '..', 'models', 'user'))

router.post('/', async (req, res) => {
	try {
		const user = new User(req.body)

		await user.save()

		res.json(user)
	} catch (err) {
		console.error(err)
		res.sendStatus(500)
	}
})

module.exports = router
