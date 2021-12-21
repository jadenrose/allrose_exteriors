import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyB3NbYjWE92bKHg7UIMsYg0UwdqzDMj0nM',
	authDomain: 'allrose-exteriors.firebaseapp.com',
	projectId: 'allrose-exteriors',
	storageBucket: 'allrose-exteriors.appspot.com',
	messagingSenderId: '1051778761788',
	appId: '1:1051778761788:web:88c77894ab25c11e7faf39',
	measurementId: 'G-MRLPS7SLS4',
}

const firebase = () => {
	try {
		initializeApp(firebaseConfig)
	} catch (err) {
		console.error(err)
	}
}

firebase()
