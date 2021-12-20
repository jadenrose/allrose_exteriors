const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const db = require('./db')

db()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const port = process.env.PORT || 5000

app.use('/pages', require('./api/pages'))
app.use('/images', require('./api/images'))
app.use('/submissions', require('./api/submissions'))

app.listen(port, () => {
	console.log(`server listening on port ${port}...`)
})
