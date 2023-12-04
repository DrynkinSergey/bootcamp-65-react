import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { Buttons } from './Buttons'

// const btn = document.querySelector('#btn')
// btn.addEventListener('click', () => console.log('hello'))

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
	}
	// dumbComponent
	// stateless

	handleIncrement = () => {
		// this.setState({ counter: this.state.counter + 1 }, () => {
		// 	console.log(this.state.counter)
		// })
		// this.setState({ counter: this.state.counter + 1 })
		this.setState(prevState => ({ counter: prevState.counter + prevState.step }))
	}

	handleDecrement = () => {
		// this.setState({ counter: this.state.counter - 1 })
		this.setState(prevState => ({ counter: prevState.counter - prevState.step }))
	}

	handleReset = () => {
		this.setState({ counter: 0, step: 1 })
	}

	handleChangeStep = e => {
		console.log(e.target.value)
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

// export const Counter = () => {
// return (
// 	<FlexContainer>
// 		<StyledCounter>
// 			<h1>{0}</h1>
// 			<Flex>
// 				<StyledButton>minus</StyledButton>
// 				<StyledButton>reset</StyledButton>
// 				<StyledButton>plus</StyledButton>
// 			</Flex>
// 		</StyledCounter>
// 	</FlexContainer>
// )
// }
