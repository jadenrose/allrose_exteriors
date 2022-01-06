import { createElement } from 'react'

const Typography = ({ component, className, children, ...rest }) =>
	createElement(
		component || 'span',
		{ className: `Typography${className ? ` ${className}` : ''}`, ...rest },
		children
	)

export default Typography
