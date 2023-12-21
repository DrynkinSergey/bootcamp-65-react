import { createSlice } from '@reduxjs/toolkit'
import { addArticleThunk, deleteArticleThunk, fetchData } from './operations'

const initialState = {
	items: [],
	loading: false,
	error: null,
}

const slice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		addArticle: (state, { payload }) => {
			state.items.push(payload)
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchData.fulfilled, (state, { payload }) => {
				state.items = payload
			})
			.addCase(addArticleThunk.fulfilled, (state, { payload }) => {
				state.items.push(payload)
			})
			.addCase(deleteArticleThunk.fulfilled, (state, { payload }) => {
				state.items = state.items.filter(item => item.id !== payload)
			})
	},
})

export const articleReducer = slice.reducer
export const { addArticle } = slice.actions
