import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

import Loading from '../components/pages/Loading'
import Error from '../components/pages/Error'
import Page from '../components/pages/Page'
import Contact from '../components/pages/Contact'

import usePages from '../hooks/usePages'

const Router = () => {
	const { loading, error } = usePages()
	const pages = useSelector((state) => state.pages.list)

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
					<Route path="*" element={<Navigate to="" />} />
				</Routes>
			) : (
				<Error />
			)}
		</>
	)
}

export default Router
