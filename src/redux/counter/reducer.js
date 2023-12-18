import { actionTypes } from './actionTypes'

const initialState = {
	counter: 1,
	step: 1,
}

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.increment:
			return {
				...state,
				counter: state.counter + state.step,
			}
		case actionTypes.decrement:
			return {
				...state,
				counter: state.counter - state.step,
			}
		case actionTypes.reset:
			return {
				...state,
				counter: 0,
			}
		default:
			return state
	}
}
