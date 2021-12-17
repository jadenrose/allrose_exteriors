import { createElement } from 'react'

const Box = ({ component = 'div', className, children, ...rest }) =>
	createElement(
		component,
		{ className: `Box${className ? ` ${className}` : ''}`, ...rest },
		children
	)

export default Box
