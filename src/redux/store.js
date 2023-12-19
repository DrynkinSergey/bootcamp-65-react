import { combineReducers } from 'redux'

import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/todoSlice'

const rootReducer = combineReducers({
	todoData: todoReducer,
})

export const store = configureStore({
	reducer: rootReducer,

	devTools: process.env.NODE_ENV !== 'production',
})
