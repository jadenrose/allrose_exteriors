import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPhone,
	faEnvelope,
	faClock,
	faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'

import Box from '../utility/Box'
import Flexbox from '../utility/Flexbox'
import Container from '../utility/Container'
import Typography from '../utility/Typography'
import Image from '../utility/Image'
import ContactForm from '../forms/ContactForm'

const Contact = () => {
	return (
		<Box component="main" className="Contact Page depth-1">
			<Box component="section" className="contact-section-hero">
				<Container>
					<Typography component="h1" className="hero-text">
						<span className="block">renovations</span>
						<span className="block">repairs</span>
						<span className="block">new builds</span>
					</Typography>
				</Container>
				<Box className="image-container">
					<Image image={['62116c49e2116151f0e9bfc4']} />
				</Box>
			</Box>
			<Box component="section" className="contact-section-1">
				<Container>
					<Flexbox className="main-content-flex">
						<Flexbox className="contact-info left">
							<Typography component="h3">
								Contact information
							</Typography>
							<a
								href="tel:+14033472522"
								className="contact-info-item"
							>
								<Flexbox>
									<Box className="contact-info-icon">
										<FontAwesomeIcon icon={faPhone} />
									</Box>
									<Box className="contact-info-text">
										<Typography component="p">
											403-347-2522
										</Typography>
										<Typography
											className="accent"
											component="p"
										>
											available by phone 24/7
										</Typography>
									</Box>
								</Flexbox>
							</a>
							<a
								href="mailto:allsiding@telus.net"
								className="contact-info-item"
							>
								<Flexbox>
									<Box className="contact-info-icon">
										<FontAwesomeIcon icon={faEnvelope} />
									</Box>
									<Box className="contact-info-text">
										<Typography component="p">
											allsiding@telus.net
										</Typography>
									</Box>
								</Flexbox>
							</a>
							<Flexbox className="contact-info-item">
								<Box className="contact-info-icon">
									<FontAwesomeIcon icon={faClock} />
								</Box>
								<Box className="contact-info-text">
									<Typography component="p">
										<strong>Monday to Friday:</strong> 8:00
										AM to 5:00 PM
									</Typography>
									<Typography component="p">
										<strong>Saturday and Sunday:</strong>{' '}
										Closed
									</Typography>
								</Box>
							</Flexbox>
							<Flexbox className="contact-info-item">
								<Box className="contact-info-icon">
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</Box>
								<Box className="contact-info-text">
									<Typography component="p">
										37563 Range Road 272, Red Deer, AB T4E
										1M5
									</Typography>
								</Box>
							</Flexbox>
						</Flexbox>
						<Flexbox className="right">
							<ContactForm />
						</Flexbox>
						<Box className="bottom">
							We provide insurance claim estimates. We'll work
							directly with your insurance company.
						</Box>
					</Flexbox>
				</Container>
			</Box>
		</Box>
	)
}

export default Contact
