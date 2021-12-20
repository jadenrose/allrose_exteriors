import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Box from './utility/Box'
import Flexbox from './utility/Flexbox'

const Navlist = () => {
	const pages = useSelector((state) => state.pages.list)

	return (
		<>
			<Flexbox className="Navlist" component="ul">
				{pages instanceof Array && (
					<>
						{pages.map((page, index) => (
							<Box
								key={index}
								component="li"
								className="nav-item"
							>
								<NavLink className="nav-link" to={page.path}>
									{page.title}
								</NavLink>
							</Box>
						))}
						<Box component="li" className="nav-item">
							<NavLink className="nav-link" to="/contact">
								contact
							</NavLink>
						</Box>
					</>
				)}
			</Flexbox>
		</>
	)
}

export default Navlist
