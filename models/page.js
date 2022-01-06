const { Schema, model } = require('mongoose')

const pageSchema = Schema({
	order: {
		type: Number,
		default: -1,
	},
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
