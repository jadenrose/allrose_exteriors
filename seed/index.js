const db = require('../db')
const fs = require('fs/promises')
const { join } = require('path')

const page = require('../models/page')

const seed = async () => {
	let connection

	try {
		connection = await db()

		try {
			await page.collection.drop()
			console.log('pages collection dropped')
		} catch (err) {
			console.err('error dropping pages collection')
		}

		const pagesJSON = await fs.readFile(
			join(__dirname, 'pages.json'),
			'utf-8'
		)

		const { pages } = JSON.parse(pagesJSON)

		await page.insertMany(pages)

		console.log(`seeded ${pages.length} pages`)
	} catch (err) {
		console.error(err)
	} finally {
		if (connection) {
			await connection.disconnect()
			console.log('mongoose disconnected')
		}
	}
}

seed()
