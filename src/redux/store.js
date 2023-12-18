import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'

const devtools = devToolsEnhancer()

const rootReducer = combineReducers({
	counterData: counterReducer,
})

export const store = createStore(rootReducer, devtools)
