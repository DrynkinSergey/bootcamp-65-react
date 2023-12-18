import { actionTypes } from './actionTypes'

const initialState = {
	todos: [{ id: '1', title: 'REDUX', completed: true }],
	filter: 'all',
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.deleteTodo:
			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.payload),
			}

		case actionTypes.addTodo:
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		case actionTypes.toggleTodo:
			return {
				...state,
				todos: state.todos.map(item => (item.id === action.payload ? { ...item, completed: !item.completed } : item)),
			}

		case actionTypes.setFilter:
			return {
				...state,
				filter: action.payload,
			}
		default:
			return state
	}
}
