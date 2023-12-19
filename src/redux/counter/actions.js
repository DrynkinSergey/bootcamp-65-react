import { createAction } from '@reduxjs/toolkit'
// import { actionTypes } from './actionTypes'

// export const increment = () => ({ type: actionTypes.increment })

// export const decrement = () => ({ type: actionTypes.decrement })

// export const reset = () => ({ type: actionTypes.reset })

// export const changeStep = newStepValue => ({ type: actionTypes.changeStep, payload: +newStepValue })

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const reset = createAction('reset')
export const changeStep = createAction('changeStep')

// console.log(increment())
// console.log(increment(21))
// console.log(increment([1, 22, 5, 'q', 1]))
