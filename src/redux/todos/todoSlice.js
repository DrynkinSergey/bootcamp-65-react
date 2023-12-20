import { createSlice } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodosThunk, toggleTodoThunk } from './operations'

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
		setFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTodosThunk.fulfilled, (state, { payload }) => {
				state.todos = payload
				state.loading = false
			})
			.addCase(deleteTodoThunk.fulfilled, (state, { payload }) => {
				state.todos = state.todos.filter(item => item.id !== payload.id)
			})
			.addCase(addTodoThunk.fulfilled, (state, { payload }) => {
				state.todos.push(payload)
			})
			.addCase(toggleTodoThunk.fulfilled, (state, { payload }) => {
				const item = state.todos.find(item => item.id === payload.id)
				item.completed = !item.completed
			})
			.addCase(fetchTodosThunk.pending, state => {
				state.loading = true
			})
			.addCase(fetchTodosThunk.rejected, (state, { payload }) => {
				state.loading = false
				state.error = payload
			})
	},
})

export const { setFilter } = todoSlice.actions
export const todoReducer = todoSlice.reducer
