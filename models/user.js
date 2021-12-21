const { Schema, model } = require('mongoose')

const UserSchema = Schema({
	name: String,
	email: {
		type: String,
		required: true,
	},
	token: String,
})

module.exports = User = model('user', UserSchema)
