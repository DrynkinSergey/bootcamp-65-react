import React, { useEffect, useMemo, useState } from 'react'
import { FlexContainer, StyledCounter } from './Counter.styled'
import { Buttons } from './Buttons'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

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
				<input type='text' value={step} onChange={handleChangeStep} />
				<Buttons handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleReset={handleReset} />
			</StyledCounter>
		</FlexContainer>
	)
}
