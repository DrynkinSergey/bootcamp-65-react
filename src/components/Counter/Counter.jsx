import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { Buttons } from './Buttons'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
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
						handleDecrement={this.handleDecrement}
						handleIncrement={this.handleIncrement}
						handleReset={this.handleReset}
					/>
				</StyledCounter>
			</FlexContainer>
		)
	}
}
