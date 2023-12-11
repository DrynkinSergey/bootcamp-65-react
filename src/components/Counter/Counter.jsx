import React, { useEffect, useState } from 'react'
import { FlexContainer, StyledCounter } from './Counter.styled'
import { Buttons } from './Buttons'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

	// Виконається лише один раз!
	useEffect(() => {
		console.log('Mount - Монтування пройшло!')
	}, [])

	// Виконається кожен раз, коли змінюється 'counter'!

	useEffect(() => {
		console.log('Update - Оновлення компонента через лічильник!')
		console.log('counter =>>>>', counter)
	}, [counter])

	// Виконається кожен раз, коли змінюється 'step'!

	useEffect(() => {
		console.log('Step змінився!')
	}, [step])

	// Виконається кожен раз, коли змінюється 'counter' або 'step'!

	useEffect(() => {
		console.log('Update будь чого')
	}, [counter, step])

	const handleIncrement = () => {
		// this.setState(prevState => ({ counter: prevState.counter + prevState.step }))

		setCounter(prevState => prevState + step)
	}

	const handleDecrement = () => {
		// this.setState(prevState => ({ counter: prevState.counter - prevState.step }))

		setCounter(prevState => prevState - step)
	}

	const handleReset = () => {
		// this.setState({ counter: 0, step: 1 })
		setCounter(0)
		setStep(1)
	}

	const handleChangeStep = e => {
		// this.setState({ step: +e.target.value })
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

// export class Counter extends React.Component {
// 	state = {
// 		counter: 0,
// 		step: 1,
// 	}
// 	componentDidMount() {
// 		console.log('Mount - Монтування пройшло!')
// 	}

// 	componentDidUpdate(_, prevState) {
// 		if (prevState.counter !== this.state.counter) {
// 			console.log('Update - Оновлення компонента через лічильник!')
// 		}
// 		if (prevState.step !== this.state.step) {
// 			console.log('Step змінився!')
// 		}
// 		if (this.state.counter === 5) {
// 			console.log('Зупинись ми вже = 5')
// 		}
// 		if (this.state.counter === 10) {
// 			this.setState({ counter: 0 })
// 		}
// 	}

// 	handleIncrement = () => {
// 		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
// 	}

// 	handleDecrement = () => {
// 		this.setState(prevState => ({ counter: prevState.counter - prevState.step }))
// 	}

// 	handleReset = () => {
// 		this.setState({ counter: 0, step: 1 })
// 	}

// 	handleChangeStep = e => {
// 		this.setState({ step: +e.target.value })
// 	}

// 	render() {
// 		const { counter, step } = this.state
// return (
// 	<FlexContainer>
// 		<StyledCounter>
// 			<h1>{counter}</h1>
// 			<input type='text' value={step} onChange={this.handleChangeStep} />
// 			<Buttons
// 				counter={counter}
// 				handleDecrement={this.handleDecrement}
// 				handleIncrement={this.handleIncrement}
// 				handleReset={this.handleReset}
// 			/>
// 		</StyledCounter>
// 	</FlexContainer>
// )
// 	}
// }
