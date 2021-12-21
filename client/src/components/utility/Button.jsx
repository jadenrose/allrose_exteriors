import React from 'react'

const Button = ({ className, children, ...rest }) => (
	<button className={`Button${className ? ` ${className}` : ''}`} {...rest}>
		{children}
	</button>
)

export default Button
