import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { FlexContainer, StyledCounter } from './Counter.styled'
import { Buttons } from './Buttons'
import { counterReducer } from '../../reducer/counterReducer'

export const Counter = () => {
	// 1. Створення початкового значення
	const initialState = {
		counter: 0,
		step: 1,
	}

	// 3. Викликати хук useReducer
	const [state, dispatch] = useReducer(counterReducer, initialState)

	const { step, counter } = state

	const myRef = useRef(null)
	const renderCount = useRef(1)
	const isFirstRender = useRef(true)

	useEffect(() => {
		// console.log(myRef)
		// console.log(myRef.current)
		// console.log(isFirstRender)
		// myRef.current.focus()
		// setTimeout(() => {
		// 	myRef.current.value = 201
		// }, 3000)
	}, [])

	useEffect(() => {
		// Your code here
		renderCount.current++
		// console.log('Кількість рендерів на сторінці ', renderCount.current)
	})

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}
		// console.log('Hello')
	}, [counter])

	const handleIncrement = () => {
		dispatch({ type: 'INCREMENT' })
		// setCounter(prevState => prevState + step)
	}

	const handleDecrement = () => {
		dispatch({ type: 'DECREMENT' })
		// setCounter(prevState => prevState - step)
	}

	const handleReset = () => {
		dispatch({ type: 'RESET' })
		// setCounter(0)
		// setStep(1)
	}

	const handleChangeStep = e => {
		dispatch({ type: 'SET_STEP', payload: +e.target.value })
		// setStep(+e.target.value)
	}

	const calcResult = () => {
		console.log('Calc start')
		for (let i = 0; i < 1000000000; i++) {}
		console.log('Calc finished')

		return 21
	}
	// const result = calcResult()

	const result = useMemo(() => {
		return calcResult()
	}, [])

	return (
		<FlexContainer>
			<StyledCounter>
				<h2>{result}</h2>
				<h1>{counter}</h1>
				<input ref={myRef} type='text' value={step} onChange={handleChangeStep} />
				<Buttons handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleReset={handleReset} />
			</StyledCounter>
		</FlexContainer>
	)
}
