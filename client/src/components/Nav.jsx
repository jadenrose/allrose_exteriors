import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Flexbox from './utility/Flexbox'
import Navlist from './Navlist'
import Phone from './Phone'
import useScreen from '../hooks/useScreen'

const Nav = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const width = useScreen()

	return (
		<Flexbox className="Nav">
			{width >= 768 ? (
				<Navlist />
			) : (
				<FontAwesomeIcon
					className="open-mobile-menu"
					icon={faBars}
					onClick={() => setShowMobileMenu(true)}
				/>
			)}
			{width > 400 && <Phone size={width > 768 ? 'large' : 'small'} />}
			{showMobileMenu && (
				<Flexbox className="mobile-nav">
					<Navlist
						mobile
						onNavigate={() => setShowMobileMenu(false)}
					/>
				</Flexbox>
			)}
		</Flexbox>
	)
}

export default Nav
