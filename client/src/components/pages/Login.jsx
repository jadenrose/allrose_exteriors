import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import Box from '../utility/Box'
import { login } from '../../store/userSlice'

const Login = () => {
	const dispatch = useDispatch()
	const { token } = useSelector((state) => state.user)

	useEffect(() => {
		if (!token) dispatch(login())
	}, [dispatch, token])

	return (
		<Box component="main" className="Admin Page">
			<Box component="section">
				<FontAwesomeIcon icon={faCircleNotch} spin />
			</Box>
		</Box>
	)
}

export default Login
