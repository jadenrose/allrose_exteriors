const { connect } = require('mongoose')

const db = async () => {
	try {
		const connection = await connect(process.env.MONGO_URI)

		if (!connection) throw 'could not connect'

		console.log('mongoose connected...')

		return connection
	} catch (err) {
		console.error(err)
	}
}

module.exports = db
