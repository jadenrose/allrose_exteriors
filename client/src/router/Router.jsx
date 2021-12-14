import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" />
				<Route path="/services" />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
