import { createElement } from 'react'

const RichText = ({ component, className, children, ...rest }) =>
	createElement(
		component || 'span',
		{ className: `RichText${className ? ` ${className}` : ''}`, ...rest },
		children
	)

export default RichText
