import React from 'react'

const FormControl = ({ label }) => (
	<label className="FormControl">
		<span>{label}</span>
		<input type="text" />
	</label>
)

export default FormControl
