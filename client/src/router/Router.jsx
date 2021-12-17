import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Container from '../components/utility/Container'
import Loading from '../components/pages/Loading'
import Error from '../components/pages/Error'
import Page from '../components/pages/Page'

import usePages from '../hooks/usePages'

const Router = () => {
	const { loading, error } = usePages()
	const pages = useSelector((state) => state.pages.list)

	return (
		<Container>
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
		</Container>
	)
}

export default Router
