import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Box from '../utility/Box'
import Flexbox from '../utility/Flexbox'
import Typography from '../utility/Typography'
import Button from '../utility/Button'
import Login from './Login'
import PageTool from './PageTool'

import { logout } from '../../store/userSlice'

const Admin = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [currentTab, setCurrentTab] = useState(0)

	const { user, pages: pagesState } = useSelector((state) => state)
	const { token } = user
	const { list: pages } = pagesState

	if (!token) return <Login />

	const handleLogout = () => {
		dispatch(logout())
		navigate('/home')
	}

	return (
		<Box component="main" className="Admin Page">
			<Box component="section">
				<Flexbox className="pages-tabs">
					{pages.map((page, index) => (
						<Flexbox
							key={index}
							onClick={() => setCurrentTab(index)}
							className={`page-tab${
								currentTab === index ? ' current' : ''
							}`}
						>
							<Typography className="center">
								{page.title}
							</Typography>
						</Flexbox>
					))}
				</Flexbox>
				<PageTool page={pages[currentTab]} />
			</Box>

			<Button className="sign-out" onClick={handleLogout}>
				Sign Out
			</Button>
		</Box>
	)
}

export default Admin
