const { initializeApp } = require('firebase/app')
const { getFirestore } = require('firebase/firestore')
const admin = require('firebase-admin/app')

const firebaseConfig = {
	apiKey: 'AIzaSyB3NbYjWE92bKHg7UIMsYg0UwdqzDMj0nM',
	authDomain: 'allrose-exteriors.firebaseapp.com',
	projectId: 'allrose-exteriors',
	storageBucket: 'allrose-exteriors.appspot.com',
	messagingSenderId: '1051778761788',
	appId: '1:1051778761788:web:88c77894ab25c11e7faf39',
	measurementId: 'G-MRLPS7SLS4',
}

const firebaseAdmin = () => {
	try {
		admin.initializeApp(firebaseConfig)
		console.log('firebase admin connected')
	} catch (err) {
		console.error(err)
	}
}

const fireStoreDB = () => {
	initializeApp(firebaseConfig)
	return getFirestore()
}

module.exports = { firebaseAdmin, fireStoreDB }
