import { createReducer } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import { addTodo, deleteTodo, setFilter, toggleTodo } from './actions'

const initialState = {
	todos: [{ id: '1', title: 'REDUX', completed: true }],
	filter: 'all',
}

export const todoReducer = createReducer(initialState, builder => {
	builder
		.addCase(deleteTodo, (state, action) => {
			// const todoIndex = state.todos.findIndex(item => item.id === action.payload)
			// state.todos.splice(todoIndex, 1)
			state.todos = state.todos.filter(item => item.id !== action.payload)
		})
		.addCase(addTodo, (state, action) => {
			state.todos.push(action.payload)
		})
		.addCase(toggleTodo, (state, { payload }) => {
			const todo = state.todos.find(item => item.id === payload)
			todo.completed = !todo.completed
		})
		.addCase(setFilter, (state, { payload }) => {
			state.filter = payload
		})
})
// export const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case actionTypes.deleteTodo:
// 			return {
// 				...state,
// 				todos: state.todos.filter(item => item.id !== action.payload),
// 			}

// 		case actionTypes.addTodo:
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload],
// 			}
// 		case actionTypes.toggleTodo:
// 			return {
// 				...state,
// 				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
// 			}

// 		case actionTypes.setFilter:
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		default:
// 			return state
// 	}
// }
