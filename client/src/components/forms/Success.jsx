import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Box from '../utility/Box'

const Loading = () => (
	<Box className="Loading">
		<FontAwesomeIcon className="checkmark icon" icon={faCheckCircle} />
	</Box>
)

export default Loading
