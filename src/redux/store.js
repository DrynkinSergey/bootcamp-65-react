import { combineReducers } from 'redux'
import { logger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/todoSlice'

const rootReducer = combineReducers({
	todoData: todoReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
})
