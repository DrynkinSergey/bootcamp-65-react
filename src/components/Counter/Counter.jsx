import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FlexContainer, StyledCounter } from './Counter.styled'
import { Buttons } from './Buttons'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

	const myRef = useRef(null)
	const renderCount = useRef(1)
	const isFirstRender = useRef(true)

	useEffect(() => {
		console.log(myRef)
		console.log(myRef.current)
		console.log(isFirstRender)
		myRef.current.focus()
		setTimeout(() => {
			myRef.current.value = 201
		}, 3000)
	}, [])

	useEffect(() => {
		// Your code here
		renderCount.current++
		console.log('Кількість рендерів на сторінці ', renderCount.current)
	})

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}
		console.log('Hello')
	}, [counter])

	const handleIncrement = () => {
		setCounter(prevState => prevState + step)
	}

	const handleDecrement = () => {
		setCounter(prevState => prevState - step)
	}

	const handleReset = () => {
		setCounter(0)
		setStep(1)
	}

	const handleChangeStep = e => {
		setStep(+e.target.value)
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
