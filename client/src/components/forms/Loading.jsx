import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import Box from '../utility/Box'

const Loading = () => (
	<Box className="Loading">
		<FontAwesomeIcon className="spinner icon" icon={faCircleNotch} spin />
	</Box>
)

export default Loading
