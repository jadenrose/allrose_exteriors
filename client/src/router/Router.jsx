import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Loading from '../components/pages/Loading'
import Error from '../components/pages/Error'
import Page from '../components/pages/Page'
import Contact from '../components/pages/Contact'
import Terms from '../components/pages/Terms'
import Privacy from '../components/pages/Privacy'

import usePages from '../hooks/usePages'

const Router = () => {
	const location = useLocation()
	const { loading, error } = usePages()
	const pages = useSelector((state) => state.pages.list)

	useEffect(() => {
		if (location) window.scrollTo(0, 0)
	}, [location])

	return (
		<>
			{loading ? (
				<Loading />
			) : error ? (
				<Error />
			) : pages && pages.length ? (
				<Routes>
					<Route element={<Page {...pages[0]} />} />
					{pages.map((page, index) => (
						<Route
							key={index}
							path={`${page.path}/*`}
							element={<Page {...page} path={page.path} />}
						/>
					))}
					<Route path="/contact" element={<Contact />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="*" element={<Navigate to="" />} />
				</Routes>
			) : (
				<Error />
			)}
		</>
	)
}

export default Router
