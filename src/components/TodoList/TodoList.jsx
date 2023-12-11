import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Flex } from '../../styles/Global'
import React, { useState } from 'react'

export const TodoList = () => {
	const [todos, setTodos] = useState(todosData)
	const [newTodoTitle, setNewTodoTitle] = useState('React')

	const handleRemoveTodo = id => {
		setTodos(prevState => prevState.filter(item => item.id !== id))
	}

	const handleChangeInput = e => {
		setNewTodoTitle(e.target.value)
	}

	const handleAddTodo = () => {
		if (!newTodoTitle) {
			return
		}

		const newTodo = { id: crypto.randomUUID(), completed: false, todo: newTodoTitle }

		setTodos(prevState => [...prevState, newTodo])
		setNewTodoTitle('')
	}
	const handleToggleTodo = id => {
		setTodos(prevState => prevState.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}
	const handleDeleteAll = () => {
		setTodos([])
	}
	const handleDeleteSelected = () => {
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
