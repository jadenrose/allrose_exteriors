import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import Box from '../utility/Box'
import Flexbox from '../utility/Flexbox'
import Typography from '../utility/Typography'

const FormControl = ({
	category = 'input',
	type = 'text',
	label,
	value,
	error = '',
	required,
	options = [],
	onChange,
	...rest
}) => {
	const [showDropDown, setShowDropDown] = useState(false)

	const toggleShowDropDown = () => setShowDropDown(!showDropDown)

	const handleSelect = (e, key) => {
		e.stopPropagation()

		onChange({
			target: {
				value: key,
			},
		})

		setShowDropDown(false)
	}

	return (
		<label className="FormControl">
			{label && (
				<Typography>
					{label}
					{required ? ' *' : ''}
				</Typography>
			)}
			{category === 'textarea' ? (
				<textarea value={value} onChange={onChange} {...rest} />
			) : category === 'select' ? (
				<Box className="select-group" {...rest}>
					<Flexbox onClick={toggleShowDropDown} className="select">
						<Typography>{options[value]}</Typography>
						<FontAwesomeIcon
							icon={faCaretDown}
							className="down-arrow"
						/>
						{showDropDown && (
							<>
								<Box
									onClick={() => setShowDropDown(false)}
									className="overlay"
								/>
								<Box className="dropdown" component="ul">
									{Object.keys(options).map((key) => (
										<Box
											key={key}
											onClick={(e) =>
												handleSelect(e, key)
											}
											component="li"
										>
											{options[key]}
										</Box>
									))}
								</Box>
							</>
						)}
					</Flexbox>
				</Box>
			) : type === 'currency' ? (
				<Flexbox className="currency-group">
					<Flexbox className="currency">
						<FontAwesomeIcon
							className="dollar-sign"
							icon={faDollarSign}
						/>
					</Flexbox>
					<input
						type="number"
						value={value}
						onChange={onChange}
						{...rest}
					/>
				</Flexbox>
			) : (
				<input
					type={type}
					value={value}
					onChange={onChange}
					{...rest}
				/>
			)}
			{error && (
				<Box>
					<Typography className="error">{error}</Typography>
				</Box>
			)}
		</label>
	)
}

export default FormControl
