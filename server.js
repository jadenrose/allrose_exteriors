const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

const port = process.env.PORT || 5000

app.use('/pages', require('./api/pages'))

app.listen(port, () => {
	console.log(`server listening on port ${port}`)
})
