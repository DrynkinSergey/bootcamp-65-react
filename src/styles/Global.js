import styled from 'styled-components'

export const StyledButton = styled.button`
	padding: 10px 14px;
	background-color: ${props => props.$bgColor || 'white'};
	font-size: ${props => props.$size || '1rem'};
`

export const Flex = styled.div`
	display: flex;
	min-height: ${props => props.$height || '100vh'};
	gap: ${props => props.$gap || '10px'};
	flex-direction: ${props => props.$direction || 'row'};
	align-items: ${props => props.$items || 'stretch'};
	justify-content: ${props => props.$justify || 'stretch'};
`
