import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import Flexbox from './utility/Flexbox'
import Typography from './utility/Typography'

const Phone = () => (
	<a className="Phone" href="tel:+14033472522">
		<Flexbox>
			<FontAwesomeIcon className="phone-icon" icon={faPhone} />
			<Typography>403-347-2522</Typography>
		</Flexbox>
	</a>
)

export default Phone
