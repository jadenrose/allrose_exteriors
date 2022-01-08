import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import Flexbox from './utility/Flexbox'
import Typography from './utility/Typography'
import useScreen from '../hooks/useScreen'

const Phone = () => {
	const width = useScreen()

	return (
		<a className="Phone" href="tel:+14033472522">
			<Flexbox>
				<FontAwesomeIcon className="phone-icon" icon={faPhone} />
				{width > 768 && <Typography>403-347-2522</Typography>}
			</Flexbox>
		</a>
	)
}

export default Phone
