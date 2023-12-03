import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todos from './../../assets/todos.json'
import { Flex } from '../../styles/Global'

export const TodoList = () => {
	return (
		<div>
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput type='text' />
					<StyledButton>Add</StyledButton>
				</Flex>
				{todos.map(item => (
					<StyledTodo>
						<input type='checkbox' />
						<span>{item.todo}</span>
						<StyledButton size='18px'>Delete</StyledButton>
					</StyledTodo>
				))}
				<button>Clear</button>
			</StyledTodoList>
		</div>
	)
}
