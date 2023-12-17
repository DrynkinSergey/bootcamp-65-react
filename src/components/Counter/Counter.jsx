import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
export const Counter = () => {
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{1}</h1>

				<input type='text' value={1} />
				<Flex>
					<StyledButton>minus</StyledButton>
					<StyledButton>reset</StyledButton>
					<StyledButton>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
