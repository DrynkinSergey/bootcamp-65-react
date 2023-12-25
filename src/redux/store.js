import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/todoSlice'
import { articleReducer } from './articles/slice'

//'https://goit-task-manager.herokuapp.com/'
const rootReducer = combineReducers({
	todoData: todoReducer,
	articles: articleReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
})
