const fs = require('fs/promises')
const path = require('path')

const db = require(path.join(__dirname, '..', 'db'))
const page = require(path.join(__dirname, '..', 'models', 'page'))

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
			path.join(__dirname, 'pages.json'),
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
