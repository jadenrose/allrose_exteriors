import { Link } from 'react-router-dom'

import Typography from './utility/Typography'

const Logo = () => (
	<Link className="Logo" to="/">
		<Typography>
			<span>allrose</span>
			<span className="accent">exteriors</span>
		</Typography>
	</Link>
)

export default Logo
