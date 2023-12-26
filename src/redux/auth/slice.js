import { createSlice } from '@reduxjs/toolkit'
import { registerThunk } from './operations'

const initialState = {
	user: {
		email: '',
		name: '',
	},
	token: '',
	isLoggedIn: false,
}

const slice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
			state.user = payload.user
			state.token = payload.token
			state.isLoggedIn = true
		})
	},
})

export const authReducer = slice.reducer
