import { Routes, Route, Navigate } from 'react-router-dom'

import Box from '../utility/Box'
import Content from '../Content'

const Page = ({ path, className, children, routes, pageTitle, ...rest }) => {
	const depth = path === '/' ? 1 : path.split('/').filter(String).length

	return (
		<Box
			component="main"
			className={`Page depth-${depth}${className ? ` ${className}` : ''}`}
			{...rest}
		>
			{children instanceof Array &&
				children.map((child, index) => (
					<Content key={index} {...child} />
				))}

			{routes instanceof Array && routes.length > 0 && (
				<Routes>
					{routes.map(({ path: routePath, ...rest }, index) => (
						<Route
							key={index}
							path={`${routePath}/*`}
							element={
								<Page {...rest} path={`${path}${routePath}`} />
							}
						/>
					))}
					<Route
						path="*"
						element={<Navigate to={`${path}${routes[0].path}`} />}
					/>
				</Routes>
			)}
		</Box>
	)
}

export default Page
