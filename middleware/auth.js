const googleAuth = require('firebase-admin').auth()

const User = require('../models/user')

const auth = async (req, res, next) => {
	try {
		const token = req.header('x-auth-token')

		const result = await googleAuth.verifyIdToken(token)
		if (!result) return res.status(401).json({ error: 'not authenticated' })

		const user = await User.findOneAndUpdate(
			{ email: result.email },
			{ $set: { token, tokenExpires: result.exp } },
			{ new: true }
		)
		if (!user) return res.status(403).json({ error: 'user not authorized' })

		res.db = { ...res.db, user }

		next()
	} catch (err) {
		console.error(err)
		res.sendStatus(500)
	}
}

module.exports = auth
