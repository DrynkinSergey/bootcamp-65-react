import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/todoSlice'

const persistConfig = {
	key: 'todoDataAndRedux',
	version: 1,
	storage,
	blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

const rootReducer = combineReducers({
	counterData: counterReducer,
	todoData: persistedReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
