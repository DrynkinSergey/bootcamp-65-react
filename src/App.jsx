import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { TodoList } from './pages/TodoList/TodoList'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register/Register'

export const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<h1>Homepage</h1>} />
				<Route path='/tasks' element={<TodoList />} />
				<Route path='/register' element={<Register />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
