import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header'
import Router from '../router/Router'
import Footer from '../components/Footer'
import '../assets/scss/main.scss'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Router />
			<Footer />
		</BrowserRouter>
	)
}

export default App
