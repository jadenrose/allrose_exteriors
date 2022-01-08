import Container from './utility/Container'
import Box from './utility/Box'
import Logo from './Logo'
import Flexbox from './utility/Flexbox'
import Typography from './utility/Typography'

const Footer = () => (
	<Box className="Footer" component="footer">
		<Container className="main-content-flex" flex>
			<Logo />
			<Flexbox className="footer-inner-content">
				<Flexbox className="left">
					<Box className="top-box">
						<Typography component="p" className="footer-heading">
							Contact Information
						</Typography>
						<Typography component="p">
							<strong>Phone:</strong> 403-347-2522
						</Typography>
						<Typography component="p">
							<strong>Email:</strong> allsiding@telus.net
						</Typography>
					</Box>
					<Box>
						<Typography component="p" className="footer-heading">
							Business Hours
						</Typography>
						<Typography component="p">
							<strong>Monnday to Friday:</strong> 8:00 AM to 5:00
							PM
						</Typography>
						<Typography component="p">
							<strong>Saturday &amp; Sunday:</strong> Closed
						</Typography>
						<Typography component="p">
							Available by phone 24/7
						</Typography>
					</Box>
				</Flexbox>
				<Flexbox className="right">
					<Typography component="p" className="footer-heading">
						Service Area
					</Typography>
					<Typography className="footer-subheading" component="p">
						Serving Central Alberta Including:
					</Typography>
					<Flexbox className="service-areas">
						<Typography component="p">Red Deer</Typography>
						<Typography component="p">Trochu</Typography>
						<Typography component="p">Three Hills</Typography>
						<Typography component="p">Penhold</Typography>
						<Typography component="p">Sylvan Lake</Typography>
						<Typography component="p">Lacombe</Typography>
						<Typography component="p">Bentley</Typography>
						<Typography component="p">
							Rocky Mountain House
						</Typography>
						<Typography component="p">Ponoka</Typography>
						<Typography component="p">Innisfail</Typography>
						<Typography component="p">Carstairs</Typography>
						<Typography component="p">Olds</Typography>
						<Typography component="p">Bowden</Typography>
					</Flexbox>
				</Flexbox>
			</Flexbox>
		</Container>
	</Box>
)

export default Footer
