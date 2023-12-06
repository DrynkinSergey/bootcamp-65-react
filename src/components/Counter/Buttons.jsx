import React from 'react'
import { Flex, StyledButton } from './Counter.styled'

export class Buttons extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.counter !== this.props.counter) {
			console.log('Counter was changed')
		}
	}
	render() {
		const { handleDecrement, handleIncrement, handleReset } = this.props
		return (
			<Flex>
				<StyledButton onClick={handleDecrement}>minus</StyledButton>
				<StyledButton onClick={handleReset}>reset</StyledButton>
				<StyledButton onClick={handleIncrement}>plus</StyledButton>
			</Flex>
		)
	}
}
