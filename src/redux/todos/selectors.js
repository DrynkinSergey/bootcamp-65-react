import { createSelector } from '@reduxjs/toolkit'

export const selectTodos = state => state.todoData.todos
export const selectLoading = state => state.todoData.loading
export const selectError = state => state.todoData.error
export const selectFilter = state => state.todoData.filter

export const selectFilteredData = createSelector([selectTodos, selectFilter], (todos, filter) => {
	console.log('FILTER TODOS')
	switch (filter) {
		case 'active':
			return todos.filter(todo => !todo.completed)
		case 'completed':
			return todos.filter(todo => todo.completed)
		default:
			return todos
	}
})
// export const selectFilteredData = state => {
// 	const todos = selectTodos(state)
// 	const filter = selectFilter(state)
// console.log('FILTER TODOS')
// switch (filter) {
// 	case 'active':
// 		return todos.filter(todo => !todo.completed)
// 	case 'completed':
// 		return todos.filter(todo => todo.completed)

// 	default:
// 		return todos
// }
// }

export const selectActiveTodos = createSelector([selectTodos], todos => {
	console.log('Search active TODOS')
	return todos.reduce((total, curr) => (!curr.completed ? (total += 1) : total), 0)
})

// export const selectActiveTodos = state => {
// 	console.log('Search active TODOS')

// 	const todos = selectTodos(state)
// 	return todos.reduce((total, curr) => (!curr.completed ? (total += 1) : total), 0)
// }
