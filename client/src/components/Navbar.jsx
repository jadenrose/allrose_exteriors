import React from 'react'

import Box from './utility/Flexbox'
import Container from './utility/Container'
import Logo from './Logo'
import Nav from './Nav'

const Navbar = () => (
	<Box className="Navbar">
		<Container flex>
			<Logo />
			<Nav />
		</Container>
	</Box>
)

export default Navbar
