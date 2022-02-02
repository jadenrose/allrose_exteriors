import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Box from './utility/Box'
import Flexbox from './utility/Flexbox'
import Typography from './utility/Typography'

const Navlist = ({ mobile = false, onNavigate }) => {
	const pages = useSelector((state) => state.pages.list)

	return (
		<>
			<Flexbox
				className={`Navlist${mobile ? ' mobile-navlist' : ''}`}
				component="ul"
			>
				{pages instanceof Array && (
					<>
						{pages.map((page, index) => (
							<Box
								key={index}
								component="li"
								className="nav-item"
							>
								<NavLink
									className="nav-link"
									to={page.path}
									onClick={() => {
										if (onNavigate instanceof Function)
											onNavigate()
									}}
								>
									<Typography>{page.pageTitle}</Typography>
								</NavLink>
							</Box>
						))}
						<Box component="li" className="nav-item">
							<NavLink
								className="nav-link"
								to="/contact"
								onClick={() => {
									if (onNavigate instanceof Function)
										onNavigate()
								}}
							>
								<Typography>contact</Typography>
							</NavLink>
						</Box>
					</>
				)}
			</Flexbox>
		</>
	)
}

export default Navlist
