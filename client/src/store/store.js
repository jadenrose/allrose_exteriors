import { configureStore } from '@reduxjs/toolkit'

import pagesReducer from './pagesSlice'
import userReducer from './userSlice'

const store = configureStore({
	reducer: {
		pages: pagesReducer,
		user: userReducer,
	},
})

export default store
