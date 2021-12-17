import Box from './utility/Box'
import Flexbox from './utility/Flexbox'
import Typography from './utility/Typography'

const Content = ({ contentType = 'plain', content, children, ...rest }) => {
	const Component = (props) => {
		if (contentType === 'box') return <Box {...props} />
		if (contentType === 'flex') return <Flexbox {...props} />

		return <Typography {...props} />
	}

	return (
		<Component {...rest}>
			{content}
			{children instanceof Array &&
				children.map((child, index) => (
					<Content key={index} {...child} />
				))}
		</Component>
	)
}

export default Content
