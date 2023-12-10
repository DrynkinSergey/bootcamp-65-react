import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todosData from './../../assets/todos.json'
import { Flex } from '../../styles/Global'
import React from 'react'

export class TodoList extends React.Component {
	state = {
		todos: todosData,
		newTodoTitle: 'React',
	}

	handleRemoveTodo = id => {
		this.setState(prevState => ({ todos: prevState.todos.filter(item => item.id !== id) }))
	}

	handleChangeInput = e => {
		this.setState({ newTodoTitle: e.target.value })
	}

	handleAddTodo = () => {
		if (!this.state.newTodoTitle) {
			return
		}
		const newTodo = { id: crypto.randomUUID(), completed: false, todo: this.state.newTodoTitle }

		this.setState(prevState => ({
			todos: [...prevState.todos, newTodo],
			newTodoTitle: '',
		}))
	}
	handleToggleTodo = id => {
		this.setState(prevState => ({
			todos: prevState.todos.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed }
				} else {
					return item
				}
			}),
		}))
	}
	handleDeleteAll = () => {
		this.setState({ todos: [] })
	}
	handleDeleteSelected = () => {
		this.setState(prevState => ({ todos: prevState.todos.filter(item => !item.completed) }))
	}

	render() {
		const { todos, newTodoTitle } = this.state
		return (
			<div>
				<StyledTodoList>
					<Flex $height='auto'>
						<StyledInput type='text' value={newTodoTitle} onChange={this.handleChangeInput} />
						<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
					</Flex>

					{todos.map(item => (
						<StyledTodo key={item.id}>
							<input type='checkbox' checked={item.completed} onChange={() => this.handleToggleTodo(item.id)} />
							<span>{item.todo}</span>
							<StyledButton onClick={() => this.handleRemoveTodo(item.id)} size='18px'>
								Delete
							</StyledButton>
						</StyledTodo>
					))}

					<button onClick={this.handleDeleteAll}>Clear</button>
					<button onClick={this.handleDeleteSelected}>Clear selected</button>
				</StyledTodoList>
			</div>
		)
	}
}
