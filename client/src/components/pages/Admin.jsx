import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Box from '../utility/Box'
import Typography from '../utility/Typography'
import Button from '../utility/Button'
import Login from './Login'

import { logout } from '../../store/userSlice'

const Admin = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { token } = useSelector((state) => state.user)

	if (!token) return <Login />

	const handleLogout = () => {
		dispatch(logout())
		navigate('/home')
	}

	return (
		<Box component="main" className="Admin Page">
			<Box component="section">
				<Typography component="h1">Admin</Typography>
			</Box>

			<Button className="sign-out" onClick={handleLogout}>
				Sign Out
			</Button>
		</Box>
	)
}

export default Admin
