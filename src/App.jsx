import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { TodoList } from './pages/TodoList/TodoList'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
import { useDispatch } from 'react-redux'
import { refreshThunk } from './redux/auth/operations'
import { useEffect } from 'react'
import { Articles } from './pages/Articles/Articles'
import { NewArticle } from './pages/NewArticle/NewArticle'

export const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])

	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<h1>Homepage</h1>} />
				<Route path='/tasks' element={<TodoList />} />
				<Route path='/articles' element={<Articles />} />
				<Route path='/articles/new' element={<NewArticle />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
