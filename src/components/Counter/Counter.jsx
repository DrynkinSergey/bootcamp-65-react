import {
	Flex,
	FlexContainer,
	StyledButton,
	StyledCounter,
} from './Counter.styled'

export const Counter = () => {
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{0}</h1>
				<Flex>
					<StyledButton>minus</StyledButton>
					<StyledButton>reset</StyledButton>
					<StyledButton>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
