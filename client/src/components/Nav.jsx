import React from 'react'

import Flexbox from './utility/Flexbox'
import Navlist from './Navlist'
import Phone from './Phone'
import useScreen from '../hooks/useScreen'

const Nav = () => {
	const width = useScreen()

	return (
		<Flexbox className="Nav">
			{width > 900 && <Navlist />}
			<Phone />
		</Flexbox>
	)
}

export default Nav
