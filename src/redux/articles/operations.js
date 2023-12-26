import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://65829e7202f747c83679b79e.mockapi.io/'

export const fetchData = createAsyncThunk('articles/fetchAll', async (_, thunkApi) => {
	try {
		const { data } = await axios.get('todos')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const addArticleThunk = createAsyncThunk('articles/add', async (body, thunkApi) => {
	try {
		const { data } = await axios.post('todos', body)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const deleteArticleThunk = createAsyncThunk('articles/delete', async (id, thunkApi) => {
	try {
		await axios.delete(`todos/${id}`)
		return id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})
