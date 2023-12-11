import React, { useEffect, useState } from 'react'
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

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>
				<input type='text' value={step} onChange={handleChangeStep} />
				<Buttons handleDecrement={handleDecrement} handleIncrement={handleIncrement} handleReset={handleReset} />
			</StyledCounter>
		</FlexContainer>
	)
}
