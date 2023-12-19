import { createReducer } from '@reduxjs/toolkit'
import { actionTypes } from './actionTypes'
import { changeStep, decrement, increment, reset } from './actions'
// 1. Створити стейт початковий
const initialState = {
	counter: 1,
	step: 1,
}

export const counterReducer = createReducer(initialState, builder => {
	builder
		.addCase(increment, (state, action) => {
			state.counter += state.step
		})
		.addCase(decrement, (state, action) => {
			state.counter -= state.step
		})
		.addCase(reset, (state, action) => {
			state.step = 1
			state.counter = 0
		})
		.addCase(changeStep, (state, action) => {
			state.step = +action.payload
		})
})

// // 2. Свторити функцію, котра буде керувати стейтом
// // Приймає два параметра - стейт та екшн
// // state - дані з чим працює функція
// // action - подія, яку присилає діспатч
// export const counterReducer = (state = initialState, action) => {
// 	// Пробігаємо по типу події
// 	switch (action.type) {
// 		// Використовуємо константи щоб не помилитись
// 		case increment.type:
// 			// Повертаємо новий стейт і змінюємо лічильник
// 			return {
// 				...state,
// 				counter: state.counter + state.step,
// 			}
// 		case actionTypes.decrement:
// 			return {
// 				...state,
// 				counter: state.counter - state.step,
// 			}
// 		case actionTypes.reset:
// 			return {
// 				...state,
// 				counter: 0,
// 			}
// 		case actionTypes.changeStep:
// 			return {
// 				...state,
// 				step: action.payload,
// 			}
// 		// Якщо жодна подія не пройшла по кейсу - повертаємо незмінний стейт
// 		default:
// 			return state
// 	}
// }
