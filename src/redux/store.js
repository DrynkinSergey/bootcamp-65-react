import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todos/todoSlice'
import { articleReducer } from './articles/slice'
import { authReducer } from './auth/slice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { articleApi } from './articlesAPI'
import { setupListeners } from '@reduxjs/toolkit/query'

const persistConfig = {
	key: 'auth',
	version: 1,
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
	todoData: todoReducer,
	articles: articleReducer,
	auth: persistedReducer,
	[articleApi.reducerPath]: articleApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(articleApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)
setupListeners(store.dispatch)
