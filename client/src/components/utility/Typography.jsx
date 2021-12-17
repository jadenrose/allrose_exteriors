import { createElement } from 'react'

const Typography = ({ component = 'span', className, children, ...rest }) =>
	createElement(
		component,
		{ className: `Typography${className ? ` ${className}` : ''}`, ...rest },
		children
	)

export default Typography
