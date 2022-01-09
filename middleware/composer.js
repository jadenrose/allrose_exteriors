const composer = (req, res, next) => {
	const token = req.header('x-auth-token')

	if (!token) return res.sendStatus(401)
	if (token !== process.env.JSON_COMPOSER_SECRET) return res.sendStatus(403)

	next()
}

module.exports = composer
