const router = require('express').Router()

const auth = require('../middleware/auth')

router.get('/', auth, (req, res) => {
	try {
		const user = res.db ? res.db.user : null

		if (!user) return res.status(401).json({ error: 'not authenticated' })

		res.json(user)
	} catch (err) {
		console.error(err)
		res.sendStatus(500)
	}
})

module.exports = router
