import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import Box from '../utility/Box'
import Typography from '../utility/Typography'
import FormGroup from '../forms/FormGroup'
import FormControl from '../forms/FormControl'
import Flexbox from '../utility/Flexbox'

const ContentTool = ({
	content: {
		contentType = 'plain',
		className,
		component,
		props,
		content: contentFromProps = '',
		children = [],
	},
}) => {
	const [content, setContent] = useState({
		contentType,
		className,
		component,
		props,
		content: contentFromProps,
		children,
	})

	return (
		<Box className="ContentTool">
			<FormGroup>
				<FormControl
					label="content type"
					value={content.contentType}
					onChange={(e) =>
						setContent({ ...content, contentType: e.target.value })
					}
					category="select"
					options={[
						{
							label: 'plain',
							value: 'plain',
						},
						{
							label: 'rich',
							value: 'rich',
						},
						{
							label: 'box',
							value: 'box',
						},
						{
							label: 'flex',
							value: 'flex',
						},
						{
							label: 'image',
							value: 'image',
						},
					]}
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					label="class name(s)"
					value={content.className}
					onChange={(e) =>
						setContent({ ...content, className: e.target.value })
					}
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					label="component override"
					value={content.component}
					onChange={(e) =>
						setContent({ ...content, component: e.target.value })
					}
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					label="extra props"
					value={content.props}
					onChange={(e) =>
						setContent({ ...content, props: e.target.value })
					}
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					label="content"
					value={content.content}
					onChange={(e) =>
						setContent({ ...content, content: e.target.value })
					}
					category="textarea"
				/>
			</FormGroup>

			<Box className="form-children">
				<Typography component="p">children</Typography>
				{content.children && (
					<>
						{content.children.map((child, index) => (
							<ContentTool key={index} content={child} />
						))}
					</>
				)}
				<Flexbox className="add-button">
					<FontAwesomeIcon className="add-icon" icon={faPlusCircle} />
					<Typography className="accent bold">add child</Typography>
				</Flexbox>
			</Box>
		</Box>
	)
}

export default ContentTool
