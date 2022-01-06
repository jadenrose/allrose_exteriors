import { Link as RouterLink } from 'react-router-dom'

const Link = ({ className, children, props, ...rest }) => {
	if (props && props.to)
		return (
			<RouterLink to={props.to} {...rest}>
				{children}
			</RouterLink>
		)

	if (props && props.href)
		return (
			<a href={props.href} {...rest}>
				{children}
			</a>
		)

	return null
}

export default Link
