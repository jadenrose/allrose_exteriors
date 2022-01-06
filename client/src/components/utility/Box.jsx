import { createElement } from 'react'

const Box = ({ component, className, children, ...rest }) =>
	createElement(
		component || 'div',
		{ className: `Box${className ? ` ${className}` : ''}`, ...rest },
		children
	)

export default Box
