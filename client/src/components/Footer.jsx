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
						<Flexbox className="city-col-1">
							<Box className="city-wrapper">
								<Typography component="p">Red Deer</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">Penhold</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">Bentley</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">Innisfail</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">Bowden</Typography>
							</Box>
						</Flexbox>
						<Flexbox className="city-col-2">
							<Box className="city-wrapper">
								<Typography component="p">Trochu</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">
									Sylvan Lake
								</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">
									Rocky Mountain House
								</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">Carstairs</Typography>
							</Box>
						</Flexbox>
						<Flexbox className="city-col-3">
							<Box className="city-wrapper">
								<Typography component="p">
									Three Hills
								</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">Lacombe</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">Ponoka</Typography>
							</Box>
							<Box className="city-wrapper">
								<Typography component="p">Olds</Typography>
							</Box>
						</Flexbox>
					</Flexbox>
				</Flexbox>
			</Flexbox>
		</Container>
	</Box>
)

export default Footer
