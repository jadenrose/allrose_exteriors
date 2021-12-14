const { Schema, model } = require('mongoose')

const pageSchema = Schema({
	className: String,
	path: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	routes: [this],
	children: [Object],
})

module.exports = page = model('page', pageSchema)
