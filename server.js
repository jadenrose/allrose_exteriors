const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const db = require('./db')

db()
require('./firebase').firebaseAdmin()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const port = process.env.PORT || 5000

app.use('/api/pages', require('./api/pages'))
app.use('/api/images', require('./api/images'))
app.use('/api/submissions', require('./api/submissions'))
app.use('/api/login', require('./api/login'))

app.listen(port, () => {
	console.log(`server listening on port ${port}...`)
})
