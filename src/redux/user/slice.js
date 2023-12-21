import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	username: '',
}

const slice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, { payload }) => {
			state.username = payload
		},
		logout: (state, { payload }) => {
			state.username = ''
		},
	},
})

export const userReducer = slice.reducer
export const { login, logout } = slice.actions
