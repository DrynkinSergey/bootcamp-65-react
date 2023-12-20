import { createSlice, nanoid } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
	todos: [],
	filter: 'all',
	loading: false,
	error: '',
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		fetchingData: (state, { payload }) => {
			state.todos = payload
			state.loading = false
		},
		isPending: (state, { payload }) => {
			state.loading = true
			state.error = ''
		},
		isError: (state, { payload }) => {
			state.error = payload
			state.loading = false
		},

		deleteTodo: (state, action) => {
			state.todos = state.todos.filter(item => item.id !== action.payload)
		},
		toggleTodo: (state, { payload }) => {
			const item = state.todos.find(item => item.id === payload)
			item.completed = !item.completed
		},
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
		addTodo: (state, { payload }) => {
			state.todos.push(payload)
		},
	},
})

export const { deleteTodo, toggleTodo, isPending, isError, setFilter, addTodo, fetchingData } = todoSlice.actions
export const todoReducer = todoSlice.reducer
