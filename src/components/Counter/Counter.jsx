import React, { useState } from 'react'
import { FlexContainer, StyledCounter } from './Counter.styled'
import { Buttons } from './Buttons'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

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
				<Buttons
					counter={counter}
					handleDecrement={handleDecrement}
					handleIncrement={handleIncrement}
					handleReset={handleReset}
				/>
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
