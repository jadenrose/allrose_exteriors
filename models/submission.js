const { Schema, model } = require('mongoose')

const SubmissionSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	address: String,
	workType: {
		type: String,
		required: true,
	},
	timeline: String,
	budget: String,
	otherDetails: String,
})

module.exports = Submission = model('submission', SubmissionSchema)
