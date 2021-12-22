import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const PENDING = 'pending'
const OK = 'ok'
const FAILED = 'failed'

const uri = process.env.BACKEND_URI || 'http://localhost:5000'

export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {
	try {
		const res = await axios.get(`${uri}/api/pages`)

		return res.data
	} catch (err) {
		throw err
	}
})

const pagesSlice = createSlice({
	name: 'pages',
	initialState: {
		status: null,
		error: null,
		list: [],
	},
	extraReducers: {
		[fetchPages.pending]: (state) => ({ ...state, status: PENDING }),
		[fetchPages.fulfilled]: (state, { payload }) => ({
			status: OK,
			error: null,
			list: payload,
		}),
		[fetchPages.rejected]: (state, { payload }) => ({
			status: FAILED,
			error: payload,
			list: [],
		}),
	},
})

export default pagesSlice.reducer
