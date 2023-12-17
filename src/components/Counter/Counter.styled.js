import styled from 'styled-components'
export const Flex = styled.div`
	display: flex;
	gap: 20px;
`
export const FlexContainer = styled(Flex)`
	min-height: 100vh;
	justify-content: center;
	align-items: center;
`
export const StyledButton = styled.button`
	padding: 10px 22px;
	border-radius: 4px;
	border: ${props => (props.$border ? `${props.$border}px solid black` : 'none')};
	font-size: ${props => props.$size || '2rem'};
	background-color: white;
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		background-color: #091ec2;
		color: white;
	}
`
export const CounterStyled = styled.h1`
	span {
		color: ${({ color }) => color};
	}
`
export const StyledCounter = styled.div`
	background-color: #454545;
	min-height: 50vh;
	padding: 20px 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: center;
	border-radius: 12px;
	h1 {
		font-size: 100px;
		color: white;
	}
`
