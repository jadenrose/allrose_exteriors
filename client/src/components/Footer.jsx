import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { isEmail } from 'validator'
import { useNavigate } from 'react-router-dom'

import Container from './utility/Container'
import Box from './utility/Box'
import Flexbox from './utility/Flexbox'
import Typography from './utility/Typography'
import Navlist from './Navlist'

import Form from './forms/Form'
import FormGroup from './forms/FormGroup'
import FormControl from './forms/FormControl'
import Button from './utility/Button'
import Link from './utility/Link'

const Footer = () => {
	const year = new Date().getFullYear()
	const [emailValue, setEmailValue] = useState('')
	const [emailError, setEmailError] = useState('')
	const navigate = useNavigate()

	const handleSubmit = () => {
		if (!isEmail(emailValue)) return setEmailError('must enter valid email')

		setEmailValue('')
		setEmailError('')

		navigate(`/contact?email=${emailValue}`)
	}

	return (
		<Box className="Footer" component="footer">
			<Container>
				<Flexbox className="main-content-flex">
					<Flexbox className="inner-content-item">
						<Typography component="h4">Quick Links</Typography>
						<Navlist />
					</Flexbox>
					<Flexbox className="inner-content-item">
						<Box className="business-hours">
							<Typography component="h4">
								Business Hours
							</Typography>
							<Typography>
								<strong>Monday to Friday:</strong> 8:00 AM to
								5:00 PM
							</Typography>
							<Typography>
								<strong>Saturday &amp; Sunday:</strong> Closed
							</Typography>
							<Typography>Available by phone 24/7</Typography>
						</Box>
						<Box className="contact-info">
							<a className="contact-link" href="tel:+14033472522">
								<FontAwesomeIcon icon={faPhone} />
								<Typography>403-347-2522</Typography>
							</a>
							<a
								className="contact-link"
								href="mailto:allsiding@telus.net"
							>
								<FontAwesomeIcon icon={faEnvelope} />
								<Typography>allsiding@telus.net</Typography>
							</a>
						</Box>
					</Flexbox>
					<Flexbox className="inner-content-item service-areas-wrapper">
						<Typography component="h4">Service Area</Typography>
						<Typography component="h5">
							Serving Central Alberta Including:
						</Typography>
						<Flexbox className="service-areas">
							<Typography>Red Deer</Typography>
							<Typography>Penhold</Typography>
							<Typography>Bentley</Typography>
							<Typography>Innisfail</Typography>
							<Typography>Bowden</Typography>
							<Typography>Trochu</Typography>
							<Typography>Sylvan Lake</Typography>
							<Typography>Rocky Mountain House</Typography>
							<Typography>Carstairs</Typography>
							<Typography>Three Hills</Typography>
							<Typography>Lacombe</Typography>
							<Typography>Ponoka</Typography>
							<Typography>Olds</Typography>
						</Flexbox>
					</Flexbox>
				</Flexbox>
				<Flexbox className="footer-bottom">
					<Box className="footer-bottom-item copyright">
						<Typography>
							<cite>
								&copy; Copyright {year} Allrose Exteriors
							</cite>
						</Typography>
					</Box>
					<Box className="footer-bottom-item form">
						<Form>
							<Typography component="h5">
								Request a free estimate (enter email below)
							</Typography>
							<FormGroup>
								<FormControl
									type="email"
									value={emailValue}
									onChange={(e) =>
										setEmailValue(e.target.value)
									}
								/>
								<Button onClick={handleSubmit}>submit</Button>
							</FormGroup>
							{emailError && (
								<Typography className="email-error">
									{emailError}
								</Typography>
							)}
						</Form>
					</Box>
					<Flexbox className="footer-bottom-item terms-policy">
						<Link className="terms" to="/terms">
							<Typography>terms and conditions</Typography>
						</Link>
						<Link to="/privacy">
							<Typography>privacy policy</Typography>
						</Link>
					</Flexbox>
				</Flexbox>
			</Container>
		</Box>
	)
}
export default Footer
