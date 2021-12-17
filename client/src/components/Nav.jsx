import React from 'react'

import Flexbox from './utility/Flexbox'
import Navlist from './Navlist'
import Phone from './Phone'

const Nav = () => (
	<Flexbox className="Nav">
		<Navlist />
		<Phone />
	</Flexbox>
)

export default Nav
