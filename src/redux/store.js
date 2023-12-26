import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/todoSlice'
import { articleReducer } from './articles/slice'
import { authReducer } from './auth/slice'

//'https://goit-task-manager.herokuapp.com/'
const rootReducer = combineReducers({
	todoData: todoReducer,
	articles: articleReducer,
	auth: authReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
})
