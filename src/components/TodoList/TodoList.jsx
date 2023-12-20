import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectLoading, selectTodos } from '../../redux/todos/selectors'

import { deleteTodo, toggleTodo, setFilter, addTodo } from '../../redux/todos/todoSlice'
import { addTodoThunk, deleteTodoThunk, fetchTodosThunk, toggleTodoThunk } from '../../redux/todos/operations'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const filter = useSelector(state => state.todoData.filter)
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodosThunk())
	}, [dispatch])

	const getFilteredData = () => {
		switch (filter) {
			case 'active':
				return todos.filter(todo => !todo.completed)
			case 'completed':
				return todos.filter(todo => todo.completed)

			default:
				return todos
		}
	}
	const filteredData = getFilteredData()

	const [newTodoText, setNewTodoText] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addTodoThunk(newTodoText))
		setNewTodoText('')
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input value={newTodoText} onChange={e => setNewTodoText(e.target.value)} type='text' />
				<button>Add todo</button>
			</form>
			<div>
				<button style={{ color: filter === 'all' && 'blue' }} onClick={() => dispatch(setFilter('all'))}>
					All
				</button>
				<button style={{ color: filter === 'active' && 'blue' }} onClick={() => dispatch(setFilter('active'))}>
					Active
				</button>
				<button style={{ color: filter === 'completed' && 'blue' }} onClick={() => dispatch(setFilter('completed'))}>
					Completed
				</button>
			</div>
			<ul>
				{filteredData.map(item => (
					<li key={item.id}>
						<input type='checkbox' onChange={() => dispatch(toggleTodoThunk(item))} checked={item.completed} />
						{item.title} <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
					</li>
				))}
			</ul>

			{loading && <h1>Loading....</h1>}
			{error && <h1>{error}</h1>}
		</div>
	)
}
