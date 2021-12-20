import Box from '../utility/Box'

import Content from '../Content'

const Page = ({ children }) => (
	<Box component="main" className="Page">
		{children instanceof Array &&
			children.map((child, index) => <Content key={index} {...child} />)}
	</Box>
)

export default Page
