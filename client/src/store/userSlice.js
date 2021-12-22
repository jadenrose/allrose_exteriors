import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import axios from 'axios'

import '../firebase'

const uri = process.env.BACKEND_URI || 'http://localhost:5000'

const provider = new GoogleAuthProvider()
const auth = getAuth()

export const login = createAsyncThunk('users/login', async () => {
	try {
		if (!auth.currentUser) await signInWithPopup(auth, provider)

		const token = await auth.currentUser.getIdToken(true)

		if (!token) throw Error('login error')

		const res = await axios.get(`${uri}/api/login`, {
			headers: {
				'x-auth-token': token,
			},
		})

		if (res.status !== 200) throw Error(`${res.status}: ${res.statusText}`)

		return res.data
	} catch (err) {
		console.error(err)
		throw err
	}
})

export const logout = createAsyncThunk('user/logout', async () => {
	try {
		try {
			await auth.signOut()
		} catch (err) {
			throw err.message
		}
	} catch (error) {}
})

const getTokenFromLocalStorage = () => {
	try {
		const token = localStorage.getItem('token')
		if (!token) return null

		return token
	} catch (err) {
		return null
	}
}

const PENDING = 'pending'
const SUCCESS = 'success'
const FAILED = 'failed'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		status: null,
		error: null,
		token: getTokenFromLocalStorage(),
		tokenExpires: null,
	},
	extraReducers: {
		[login.pending]: (state) => ({ ...state, status: PENDING }),
		[login.fulfilled]: (state, { payload: { token, tokenExpires } }) => {
			localStorage.setItem('token', token)

			return {
				status: SUCCESS,
				error: null,
				token,
				tokenExpires,
			}
		},
		[login.rejected]: (state, { payload }) => {
			localStorage.removeItem('token')

			return {
				status: FAILED,
				error: payload,
				token: null,
				tokenExpires: null,
			}
		},
		[logout.pending]: (state) => ({ ...state, status: PENDING }),
		[logout.fulfilled]: () => {
			localStorage.removeItem('token')
			return { ...userSlice.initialState }
		},
		[logout.rejected]: () => {
			localStorage.removeItem('token')
			return { ...userSlice.initialState }
		},
	},
})

export default userSlice.reducer
