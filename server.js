const express = require('express')
const enforce = require('express-sslify')
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback')

const app = express()

app.use(enforce.HTTPS())

const db = require(path.join(__dirname, 'db'))

db()

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
	const morgan = require('morgan')
	app.use(morgan('dev'))
}

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
