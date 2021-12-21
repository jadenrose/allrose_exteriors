import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import '../firebase'

const provider = new GoogleAuthProvider()
const auth = getAuth()

export const login = createAsyncThunk('users/login', async () => {
	try {
		if (!auth.currentUser) await signInWithPopup(auth, provider)

		const token = await auth.currentUser.getIdToken()

		if (!token) throw Error('login error')

		return token
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
	},
	extraReducers: {
		[login.pending]: (state) => ({ ...state, status: PENDING }),
		[login.fulfilled]: (state, { payload }) => {
			localStorage.setItem('token', payload)

			return {
				status: SUCCESS,
				error: null,
				token: payload,
			}
		},
		[login.rejected]: (state, { payload }) => {
			localStorage.removeItem('token')

			return {
				status: FAILED,
				error: payload,
				token: null,
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
