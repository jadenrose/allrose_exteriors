import Container from '../utility/Container'
import Typography from '../utility/Typography'

const Terms = () => {
	return (
		<main className="Terms Page depth-1">
			<Container>
				<article className="preface">
					<Typography component="h1">Terms and Conditions</Typography>
					<Typography component="p">
						These terms and conditions (the "Terms and Conditions")
						govern the use of <strong>allroseexteriors.ca</strong>{' '}
						(the "Site"). This Site is owned and operated by Allrose
						Exteriors. This Site is a portfolio.
					</Typography>
					<Typography component="p">
						By using this Site, you indicate that you have read and
						understand these Terms and Conditions and agree to abide
						by them at all times.
					</Typography>
				</article>
				<article className="intellectual-property">
					<Typography component="h2">
						Intellectual Property
					</Typography>
					<Typography component="p">
						All content published and made available on our Site is
						the property of Allrose Exteriors and the Site's
						creators. This includes, but is not limited to images,
						text, logos, documents, downloadable files and anything
						that contributes to the composition of our Site.
					</Typography>
				</article>
				<article className="age-restrictions">
					<Typography component="h2">Age Restrictions</Typography>
					<Typography component="p">
						The minimum age to use our Site is 13 years old. By
						using this Site, users agree that they are over 13 years
						old. We do not assume any legal responsibility for false
						statements about age.
					</Typography>
				</article>
				<article className="other-websites">
					<Typography component="h2">
						Links to Other Websites
					</Typography>
					<Typography component="p">
						Our Site contains links to third party websites or
						services that we do not own or control. We are not
						responsible for the content, policies, or practices of
						any third party website or service linked to on our
						Site. It is your responsibility to read the terms and
						conditions and privacy policies of these third party
						websites before using these sites.
					</Typography>
				</article>
				<article className="liability">
					<Typography component="h2">
						Limitation of Liability
					</Typography>
					<Typography component="p">
						Allrose Exteriors and our directors, officers, agents,
						employees, subsidiaries, and affiliates will not be
						liable for any actions, claims, losses, damages,
						liabilities and expenses including legal fees from your
						use of the Site.
					</Typography>
				</article>
				<article className="indemnity">
					<Typography component="h2">Indemnity</Typography>
					<Typography component="p">
						Except where prohibited by law, by using this Site you
						indemnify and hold harmless Allrose Exteriors and our
						directors, officers, agents, employees, subsidiaries,
						and affiliates from any actions, claims, losses,
						damages, liabilities and expenses including legal fees
						arising out of your use of our Site or your violation of
						these Terms and Conditions.
					</Typography>
				</article>
				<article className="applicable-law">
					<Typography component="h2">Applicable Law</Typography>
					<Typography component="p">
						These Terms and Conditions are governed by the laws of
						the Province of Alberta.
					</Typography>
				</article>
				<article className="severability">
					<Typography component="h2">Severability</Typography>
					<Typography component="p">
						If at any time any of the provisions set forth in these
						Terms and Conditions are found to be inconsistent or
						invalid under applicable laws, those provisions will be
						deemed void and will be removed from these Terms and
						Conditions. All other provisions will not be affected by
						the removal and the rest of these Terms and Conditions
						will still be considered valid.
					</Typography>
				</article>
				<article className="changes">
					<Typography component="h2">Changes</Typography>
					<Typography component="p">
						These Terms and Conditions may be amended from time to
						time in order to maintain compliance with the law and to
						reflect any changes to the way we operate our Site and
						the way we expect users to behave on our Site. We will
						notify users by email of changes to these Terms and
						Conditions or post a notice on our Site.
					</Typography>
				</article>
				<article className="contact">
					<Typography component="h2">Contact Details</Typography>
					<Typography component="p">
						Please contact us if you have any questions or concerns.
						Our contact details are as follows:
					</Typography>
					<Typography component="p">
						<a href="tel:+14033472522">(403) 347-2522</a>
					</Typography>
					<Typography component="p">
						<a href="mailto:allsiding@telus.net">
							allsiding@telus.net
						</a>
					</Typography>
					<Typography component="p">
						37563 Range Road 272, Red Deer, AB T4E 1M5
					</Typography>
				</article>
				<Typography component="p" className="effective-date">
					Effective Date: 28th day of February, 2022
				</Typography>
			</Container>
		</main>
	)
}

export default Terms
