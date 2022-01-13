import { Link as RouterLink } from 'react-router-dom'

const Link = ({ className, children, props, ...rest }) => {
	if (props && props.to)
		return (
			<RouterLink
				className={`Link${className ? ` ${className}` : ''}`}
				to={props.to}
				{...rest}
			>
				{children}
			</RouterLink>
		)

	if (props && props.href)
		return (
			<a
				className={`Link${className ? ` ${className}` : ''}`}
				href={props.href}
				{...rest}
				target="_blank"
				rel="noreferrer"
			>
				{children}
			</a>
		)

	return 'nothing here'
}

export default Link
