import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

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
		builder
			.addCase(logoutThunk.fulfilled, state => {
				state.user = initialState.user
				state.isLoggedIn = false
				state.token = ''
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.name
				state.user.email = payload.email
				state.isLoggedIn = true
			})
			.addCase(registerThunk.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.token = payload.token
				state.isLoggedIn = true
			})
	},
})

export const authReducer = slice.reducer
