import { actionTypes } from './actionTypes'

export const deleteTodo = id => ({ type: actionTypes.deleteTodo, payload: id })
export const addTodo = todo => ({ type: actionTypes.addTodo, payload: todo })
export const toggleTodo = id => ({ type: actionTypes.toggleTodo, payload: id })
export const setFilter = value => ({ type: actionTypes.setFilter, payload: value })
