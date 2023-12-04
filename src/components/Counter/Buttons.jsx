import React from 'react'
import { Flex, StyledButton } from './Counter.styled'

export const Buttons = ({ handleDecrement, handleIncrement, handleReset }) => {
	return (
		<Flex>
			<StyledButton onClick={handleDecrement}>minus</StyledButton>
			<StyledButton onClick={handleReset}>reset</StyledButton>
			<StyledButton onClick={handleIncrement}>plus</StyledButton>
		</Flex>
	)
}
