import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from '../components/Loading'
import Error from '../components/Error'
import Page from '../components/Page'

import usePages from '../hooks/usePages'

const Router = () => {
	const { loading, error } = usePages()
	const pages = useSelector((state) => state.pages.list)

	return (
		<BrowserRouter>
			{loading ? (
				<Loading />
			) : error ? (
				<Error />
			) : pages && pages.length ? (
				<Routes>
					<Route index element={<Page {...pages[0]} />} />
					{pages.map((page, index) => (
						<Route
							key={index}
							path={page.path}
							element={<Page {...page} />}
						/>
					))}
				</Routes>
			) : (
				<Error />
			)}
		</BrowserRouter>
	)
}

export default Router
