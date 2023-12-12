// 2. Свторення функції, котра буде керувати значенням
export const counterReducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				counter: state.counter + state.step,
			}
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - state.step,
			}
		case 'RESET':
			return {
				...state,
				counter: 0,
				step: 1,
			}
		case 'SET_STEP':
			return {
				...state,
				step: action.payload,
			}

		default:
			return state
	}
}
