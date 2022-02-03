import { useState } from 'react'
import { isEmail } from 'validator'
import axios from 'axios'

import Typography from '../utility/Typography'
import Form from './Form'
import FormGroup from './FormGroup'
import FormControl from './FormControl'
import Button from '../utility/Button'

import Loading from './Loading'
import Success from './Success'

const ContactForm = () => {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		workType: '',
		timeline: '',
		budget: '',
		otherDetails: '',
	})

	const initialErrors = {
		name: '',
		email: '',
		phone: '',
		address: '',
		workType: '',
		timeline: '',
		budget: '',
		otherDetails: '',
	}

	const [errors, setErrors] = useState(initialErrors)

	const handleSubmit = async (e) => {
		const err = initialErrors

		e.preventDefault()

		if (!formData.name) err.name = 'name is required'
		if (!formData.email) err.email = 'email is required'
		if (!formData.phone) err.phone = 'phone is required'
		if (!formData.workType) err.workType = 'type is required'

		if (formData.email && !isEmail(formData.email))
			err.email = 'please enter a valid email address'

		if (Object.entries(err).find(([key, value]) => value)) {
			return setErrors({ ...errors, ...err })
		}

		setLoading(true)

		const URI = 'https://allrose-exteriors.herokuapp.com'

		const res = await axios.post(`${URI}/api/submissions`, formData)

		setErrors(initialErrors)
		setLoading(false)
		setSuccess(true)
	}

	return (
		<Form className="ContactForm">
			<Typography component="h2">Request a free estimate</Typography>
			<FormGroup>
				<FormControl
					value={formData.name}
					error={errors.name}
					onChange={(e) =>
						setFormData({ ...formData, name: e.target.value })
					}
					label="Name"
					required
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					value={formData.email}
					error={errors.email}
					onChange={(e) =>
						setFormData({ ...formData, email: e.target.value })
					}
					type="email"
					label="Email address"
					required
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					value={formData.phone}
					error={errors.phone}
					onChange={(e) =>
						setFormData({ ...formData, phone: e.target.value })
					}
					type="tel"
					label="Phone number"
					required
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					value={formData.address}
					error={errors.address}
					onChange={(e) =>
						setFormData({ ...formData, address: e.target.value })
					}
					label="Address"
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					value={formData.workType}
					error={errors.workType}
					onChange={(e) =>
						setFormData({ ...formData, workType: e.target.value })
					}
					category="select"
					label="Type of work to be completed"
					options={[
						{
							label: 'Siding, Soffit, & Fascia',
							value: 'siding',
						},
						{
							label: 'Roofing',
							value: 'roofinh',
						},
						{
							label: 'Windows',
							value: 'windows',
						},
						{
							label: 'Patio Cover/Sun Room',
							value: 'patio',
						},
						{
							label: 'Hail/Storm Damage Repair',
							value: 'hail',
						},
					]}
					required
				></FormControl>
			</FormGroup>
			<FormGroup>
				<FormControl
					value={formData.timeline}
					error={errors.timeline}
					onChange={(e) =>
						setFormData({ ...formData, timeline: e.target.value })
					}
					label="Timeline"
				/>
				<FormControl
					value={formData.budget}
					error={errors.budget}
					onChange={(e) =>
						setFormData({ ...formData, budget: e.target.value })
					}
					type="currency"
					label="Budget"
				/>
			</FormGroup>
			<FormGroup>
				<FormControl
					value={formData.otherDetails}
					error={errors.otherDetails}
					onChange={(e) =>
						setFormData({
							...formData,
							otherDetails: e.target.value,
						})
					}
					category="textarea"
					label="Other details"
				/>
			</FormGroup>
			<FormGroup>
				<Button onClick={(e) => handleSubmit(e)}>
					<Typography>Send message</Typography>
				</Button>
			</FormGroup>
			{loading && <Loading />}
			{!loading && success && <Success />}
		</Form>
	)
}

export default ContactForm
