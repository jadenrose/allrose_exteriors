import parse from 'html-react-parser'

import Box from './utility/Box'
import Container from './utility/Container'
import Card from './utility/Card'
import Flexbox from './utility/Flexbox'
import Typography from './utility/Typography'
import Button from './utility/Button'
import Link from './utility/Link'
import RichText from './utility/RichText'

const Content = ({ contentType = 'plain', content, children, ...rest }) => {
	const Component = (props) => {
		if (contentType === 'box') return <Box {...props} />
		if (contentType === 'container') return <Container {...props} />
		if (contentType === 'card') return <Card {...props} />
		if (contentType === 'flex') return <Flexbox {...props} />
		if (contentType === 'button') return <Button {...props} />
		if (contentType === 'link') return <Link {...props} />
		if (contentType === 'rich') return <RichText {...props} />

		return <Typography {...props} />
	}

	return (
		<Component {...rest}>
			{contentType === 'rich' ? parse(content) : content}
			{children instanceof Array && (
				<>
					{children.map((child, index) => (
						<Content key={index} {...child} />
					))}
				</>
			)}
		</Component>
	)
}

export default Content
