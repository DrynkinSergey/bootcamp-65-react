import { combineReducers } from 'redux'
import { logger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/todoSlice'

const rootReducer = combineReducers({
	todoData: todoReducer,
})

const myMiddleware = store => next => action => {
	console.log(action)
	if (action?.payload?.title === 'angular') {
		console.log('ALERT ANGULAR IS NOT AVAILABLE')
		action.payload.title = 'react'
	}
	next(action)
}

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
})
