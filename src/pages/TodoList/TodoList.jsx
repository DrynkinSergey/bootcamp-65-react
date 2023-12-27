import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectActiveTodos,
	selectError,
	selectFilter,
	selectFilteredData,
	selectLoading,
} from '../../redux/todos/selectors'

import { setFilter } from '../../redux/todos/todoSlice'
import { addTodoThunk, deleteTodoThunk, fetchTodosThunk, toggleTodoThunk } from '../../redux/todos/operations'

export const TodoList = () => {
	const todos = useSelector(selectFilteredData)
	const filter = useSelector(selectFilter)
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const activeTodos = useSelector(selectActiveTodos)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodosThunk())
	}, [dispatch])

	const [newTodoText, setNewTodoText] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addTodoThunk(newTodoText))
		setNewTodoText('')
	}
	return (
		<div>
			<form className='flex justify-center gap-4   px-4 py-4 w-1/2 mx-auto' onSubmit={handleSubmit}>
				<input
					className='border-2 border-black'
					value={newTodoText}
					onChange={e => setNewTodoText(e.target.value)}
					type='text'
				/>
				<button className='border-2 border-black px-4 py-1'>Add todo</button>
			</form>
			<div className='flex justify-center gap-4'>
				<button
					className='border-2 border-black px-4 rounded-md'
					style={{ color: filter === 'all' && 'blue' }}
					onClick={() => dispatch(setFilter('all'))}
				>
					All
				</button>
				<button
					className='border-2 border-black px-4 rounded-md'
					style={{ color: filter === 'active' && 'blue' }}
					onClick={() => dispatch(setFilter('active'))}
				>
					Active
				</button>
				<button
					className='border-2 border-black px-4 rounded-md'
					style={{ color: filter === 'completed' && 'blue' }}
					onClick={() => dispatch(setFilter('completed'))}
				>
					Completed
				</button>
			</div>

			<h1 className='text-center my-4 font-bold text-2xl'>Active todos: {activeTodos}</h1>
			<ul className='grid grid-cols-3 gap-10 w-[80%]  mx-auto p-0'>
				{todos.map(item => (
					<li className='flex p-4 border-2 border-black rounded-md shadow-md gap-4 justify-between' key={item.id}>
						<input type='checkbox' onChange={() => dispatch(toggleTodoThunk(item))} checked={item.completed} />
						{item.text}{' '}
						<button
							className='border-2 border-black px-2 rounded-md hover:bg-red-500'
							onClick={() => dispatch(deleteTodoThunk(item.id))}
						>
							Delete
						</button>
					</li>
				))}
			</ul>

			{loading && <h1>Loading....</h1>}
			{error && <h1>{error}</h1>}
		</div>
	)
}
