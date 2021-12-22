import React from 'react'
import Box from '../utility/Box'

import ContentTool from './ContentTool'

const PageTool = ({ page }) => (
	<Box className="PageTool">
		{page.children.map((child, index) => (
			<ContentTool key={index} content={child} />
		))}
	</Box>
)

export default PageTool
