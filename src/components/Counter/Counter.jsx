import React from 'react'
import { FlexContainer, StyledCounter } from './Counter.styled'
import { Buttons } from './Buttons'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
	}
	componentDidMount() {
		console.log('Mount - Монтування пройшло!')
	}

	componentDidUpdate(_, prevState) {
		if (prevState.counter !== this.state.counter) {
			console.log('Update - Оновлення компонента через лічильник!')
		}
		if (prevState.step !== this.state.step) {
			console.log('Step змінився!')
		}
		if (this.state.counter === 5) {
			console.log('Зупинись ми вже = 5')
		}
		if (this.state.counter === 10) {
			this.setState({ counter: 0 })
		}
	}

	handleIncrement = () => {
		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
	}

	handleDecrement = () => {
		this.setState(prevState => ({ counter: prevState.counter - prevState.step }))
	}

	handleReset = () => {
		this.setState({ counter: 0, step: 1 })
	}

	handleChangeStep = e => {
		this.setState({ step: +e.target.value })
	}

	render() {
		const { counter, step } = this.state
		return (
			<FlexContainer>
				<StyledCounter>
					<h1>{counter}</h1>
					<input type='text' value={step} onChange={this.handleChangeStep} />
					<Buttons
						counter={counter}
						handleDecrement={this.handleDecrement}
						handleIncrement={this.handleIncrement}
						handleReset={this.handleReset}
					/>
				</StyledCounter>
			</FlexContainer>
		)
	}
}
