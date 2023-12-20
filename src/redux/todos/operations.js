//https://65829e7202f747c83679b79e.mockapi.io/todos

import axios from 'axios'
import { addTodo, deleteTodo, fetchingData, isError, isPending, toggleTodo } from './todoSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://65829e7202f747c83679b79e.mockapi.io'

// CRUD
// C - create
// R - read
// U - update
// D - delete

// createAsyncThunk

export const fetchTodosThunk = createAsyncThunk('fetchTodos', async (_, thunkAPI) => {
	try {
		const { data } = await axios.get('todos')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
	try {
		const { data } = await axios.delete(`todos/${id}`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('addTodo', async (text, thunkAPI) => {
	try {
		const { data } = await axios.post('todos', { title: text })
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (todo, thunkAPI) => {
	try {
		const { data } = await axios.put(`todos/${todo.id}`, { ...todo, completed: !todo.completed })
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

// export const fetchTodosThunk = () => async dispatch => {
// 	try {
// 		dispatch(isPending())
// 		const response = await axios.get('todos')
// 		console.log(response)
// 		dispatch(fetchingData(response.data))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }

// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		const response = await axios.delete(`todos/${id}`)
// 		dispatch(deleteTodo(response.data.id))
// 		console.log(response.data)
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }

// export const addTodoThunk = text => async dispatch => {
// 	try {
// 		const response = await axios.post('todos', { title: text })
// 		console.log(response.data)
// 		dispatch(addTodo(response.data))
// 	} catch (error) {
// 		dispatch(isError(error.message))
// 	}
// }
// export const toggleTodoThunk = todo => async dispatch => {
// 	try {
// 		const response = await axios.put(`todos/${todo.id}`, { ...todo, completed: !todo.completed })
// 		dispatch(toggleTodo(response.data.id))
// 		console.log(response.data)
// 	} catch (error) {}
// }
