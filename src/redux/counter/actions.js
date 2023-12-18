import { actionTypes } from './actionTypes'

export const increment = () => ({ type: actionTypes.increment })

export const decrement = () => ({ type: actionTypes.decrement })

export const reset = () => ({ type: actionTypes.reset })

export const changeStep = newStepValue => ({ type: actionTypes.changeStep, payload: +newStepValue })
