const express = require('express')
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')

const app = express()

const db = require(path.join(__dirname, 'db'))

db()

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
	const morgan = require('morgan')
	app.use(morgan('dev'))
}

app.all('*', function (req, res, next) {
	console.log(
		'req start: ',
		req.secure,
		req.hostname,
		req.url,
		app.get('port')
	)
	if (req.secure) {
		return next()
	}

	res.redirect('https://' + req.hostname + ':' + app.get('secPort') + req.url)
})

app.use('/api/pages', require(path.join(__dirname, 'api', 'pages')))
app.use('/api/images', require(path.join(__dirname, 'api', 'images')))
app.use('/api/submissions', require(path.join(__dirname, 'api', 'submissions')))

app.use(history())

app.use('/', serveStatic(path.join(__dirname, 'client', 'build')))
app.get('/.*/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`server listening on port ${port}...`)
})
