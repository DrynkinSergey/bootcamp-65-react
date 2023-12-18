import { useDispatch, useSelector } from 'react-redux'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { actionTypes } from '../../redux/counter/actionTypes'
import { selectCounter, selectStep } from '../../redux/counter/selectors'
import { changeStep, decrement, increment, reset } from '../../redux/counter/actions'
export const Counter = () => {
	const counter = useSelector(selectCounter)
	const step = useSelector(selectStep)

	const dispatch = useDispatch()

	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>

				<input type='text' onChange={e => dispatch(changeStep(e.target.value))} value={step} />

				<Flex>
					<StyledButton onClick={() => dispatch(decrement())}>minus</StyledButton>
					<StyledButton onClick={() => dispatch(reset())}>reset</StyledButton>
					<StyledButton onClick={() => dispatch(increment())}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
