import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Flex } from '../../styles/Global'
import React, { useState } from 'react'

export const TodoList = () => {
	const [todos, setTodos] = useState(todosData)
	const [newTodoTitle, setNewTodoTitle] = useState('React')

	const handleRemoveTodo = id => {
		// setState(prevState => ({ todos: prevState.todos.filter(item => item.id !== id) }))

		setTodos(prevState => prevState.filter(item => item.id !== id))
	}

	const handleChangeInput = e => {
		setNewTodoTitle(e.target.value)
		// setState({ newTodoTitle: e.target.value })
	}

	const handleAddTodo = () => {
		if (!newTodoTitle) {
			return
		}

		const newTodo = { id: crypto.randomUUID(), completed: false, todo: newTodoTitle }

		setTodos(prevState => [...prevState, newTodo])
		setNewTodoTitle('')
		// if (!state.newTodoTitle) {
		// 	return
		// }
		// const newTodo = { id: crypto.randomUUID(), completed: false, todo: state.newTodoTitle }
		// setState(prevState => ({
		// 	todos: [...prevState.todos, newTodo],
		// 	newTodoTitle: '',
		// }))
	}
	const handleToggleTodo = id => {
		setTodos(prevState => prevState.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))

		// setState(prevState => ({
		// 	todos: prevState.todos.map(item => {
		// 		if (item.id === id) {
		// 			return { ...item, completed: !item.completed }
		// 		} else {
		// 			return item
		// 		}
		// 	}),
		// }))2
	}
	const handleDeleteAll = () => {
		// setState({ todos: [] })
		setTodos([])
	}
	const handleDeleteSelected = () => {
		// setState(prevState => ({ todos: prevState.todos.filter(item => !item.completed) }))
		setTodos(prevState => prevState.filter(item => !item.completed))
	}

	return (
		<div>
			<StyledTodoList>
				<Flex $height='auto'>
					<StyledInput type='text' value={newTodoTitle} onChange={handleChangeInput} />
					<StyledButton onClick={handleAddTodo}>Add</StyledButton>
				</Flex>

				{todos.map(item => (
					<StyledTodo key={item.id}>
						<input type='checkbox' checked={item.completed} onChange={() => handleToggleTodo(item.id)} />
						<span>{item.todo}</span>
						<StyledButton onClick={() => handleRemoveTodo(item.id)} size='18px'>
							Delete
						</StyledButton>
					</StyledTodo>
				))}

				<button onClick={handleDeleteAll}>Clear</button>
				<button onClick={handleDeleteSelected}>Clear selected</button>
			</StyledTodoList>
		</div>
	)
}

// export class TodoList extends React.Component {
// 	state = {
// 		todos: todosData,
// 		newTodoTitle: 'React',
// 	}

// handleRemoveTodo = id => {
// 	setState(prevState => ({ todos: prevState.todos.filter(item => item.id !== id) }))
// }

// handleChangeInput = e => {
// 	setState({ newTodoTitle: e.target.value })
// }

// handleAddTodo = () => {
// 	if (!state.newTodoTitle) {
// 		return
// 	}
// 	const newTodo = { id: crypto.randomUUID(), completed: false, todo: state.newTodoTitle }

// 	setState(prevState => ({
// 		todos: [...prevState.todos, newTodo],
// 		newTodoTitle: '',
// 	}))
// }
// handleToggleTodo = id => {
// 	setState(prevState => ({
// 		todos: prevState.todos.map(item => {
// 			if (item.id === id) {
// 				return { ...item, completed: !item.completed }
// 			} else {
// 				return item
// 			}
// 		}),
// 	}))
// }
// handleDeleteAll = () => {
// 	setState({ todos: [] })
// }
// handleDeleteSelected = () => {
// 	setState(prevState => ({ todos: prevState.todos.filter(item => !item.completed) }))
// }

// 	render() {
// 		const { todos, newTodoTitle } = state
// return (
// 	<div>
// 		<StyledTodoList>
// 			<Flex $height='auto'>
// 				<StyledInput type='text' value={newTodoTitle} onChange={handleChangeInput} />
// 				<StyledButton onClick={handleAddTodo}>Add</StyledButton>
// 			</Flex>

// 			{todos.map(item => (
// 				<StyledTodo key={item.id}>
// 					<input type='checkbox' checked={item.completed} onChange={() => handleToggleTodo(item.id)} />
// 					<span>{item.todo}</span>
// 					<StyledButton onClick={() => handleRemoveTodo(item.id)} size='18px'>
// 						Delete
// 					</StyledButton>
// 				</StyledTodo>
// 			))}

// 			<button onClick={handleDeleteAll}>Clear</button>
// 			<button onClick={handleDeleteSelected}>Clear selected</button>
// 		</StyledTodoList>
// 	</div>
// )
// 	}
// }
