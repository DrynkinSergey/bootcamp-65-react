// Імпортуємо функцію createStore , combineReducers
// CreateStore - конфігуратор для створення стору( сховище даних)
import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'

// Встановлюємо пакет для devToolss та використовуємо його
const devtools = devToolsEnhancer()

// Збираємо до купи всі редьюсери в один великий об'єкт
const rootReducer = combineReducers({
	counterData: counterReducer,
})

// Екпортуємо наш стор з файлу, передаємо рут редьюсер, щоб працював доступ і маніпуляція з даними
// Другий аргумент, не обов'язковий! Це девтулз, для дебагу
export const store = createStore(rootReducer, devtools)
