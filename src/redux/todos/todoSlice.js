import { createSlice, nanoid } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
	todos: [{ id: '1', title: 'REDUX', completed: true }],
	filter: 'all',
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
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
		addTodo: {
			// const newTodo = { id: crypto.randomUUID(), title: payload, completed: false }
			// state.todos.push(newTodo)
			prepare: title => {
				return {
					payload: {
						title,
						completed: false,
						id: nanoid(),
						createdAt: moment().format('DD.MM.YYYY hh:mm:ss'),
					},
				}
			},
			reducer: (state, { payload }) => {
				state.todos.push(payload)
			},
		},
	},
})

export const { deleteTodo, toggleTodo, setFilter, addTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
