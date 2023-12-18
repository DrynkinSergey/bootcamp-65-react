import { useDispatch, useSelector } from 'react-redux'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { actionTypes } from '../../redux/counter/actionTypes'
export const Counter = () => {
	const counter = useSelector(state => state.counterData.counter)
	const step = useSelector(state => state.counterData.step)

	const dispatch = useDispatch()

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' value={step} />
				<Flex>
					<StyledButton onClick={() => dispatch({ type: actionTypes.decrement })}>minus</StyledButton>
					<StyledButton onClick={() => dispatch({ type: actionTypes.reset })}>reset</StyledButton>
					<StyledButton onClick={() => dispatch({ type: actionTypes.increment })}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
