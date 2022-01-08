import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import Box from './Box'
import Flexbox from './Flexbox'
import Typography from './Typography'

const Card = ({ component, className, children, props, ...rest }) => {
	return (
		<>
			{props && props.to && (
				<Link to={props.to} className="Card">
					<Flexbox className="card-container">
						<Box>
							<Flexbox className="card-title">
								<Typography component="h3">
									{props.title}
								</Typography>
							</Flexbox>
							<Flexbox className="card-body">
								<Typography component="p">
									{children}
								</Typography>
							</Flexbox>
						</Box>
						<Flexbox className="card-link">
							<Typography>Read more</Typography>
							<FontAwesomeIcon icon={faArrowCircleRight} />
						</Flexbox>
					</Flexbox>
				</Link>
			)}
		</>
	)
}

export default Card
