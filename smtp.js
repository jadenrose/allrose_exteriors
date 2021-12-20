const nodemailer = require('nodemailer')

const transport = {
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.SMTP_EMAIL,
		pass: process.env.SMTP_PASSWORD,
	},
}

const smtp = async () => {
	const transporter = nodemailer.createTransport(transport)
	const verify = await transporter.verify()

	if (verify instanceof Error) throw err

	console.log('ready to send mail')
	return transporter
}

module.exports = smtp
