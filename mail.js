const mailgun = require('mailgun-js')
const DOMAIN = process.env.MAILGUN_DOMAIN
const mg = mailgun({
	apiKey: process.env.MAILGUN_API_KEY,
	domain: DOMAIN,
})

const sendMessage = ({ to, subject, text, html }) => {
	try {
		const data = {
			from: `Allrose Exteriors <noreply@${DOMAIN}>`,
			to,
			subject,
			text,
			html,
		}

		mg.messages().send(data, (err, body) => {
			console.log(body)
		})
	} catch (err) {
		console.error(err)
	}
}

module.exports = sendMessage
