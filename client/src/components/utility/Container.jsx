import { createElement } from 'react'

import Box from './Box'
import Flexbox from './Flexbox'

const Container = ({ className, children, flex = false, ...rest }) =>
	createElement(
		flex ? Flexbox : Box,
		{ className: `Container${className ? ` ${className}` : ''}`, ...rest },
		children
	)

export default Container
