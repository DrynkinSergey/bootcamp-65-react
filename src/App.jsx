import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { TodoList } from './pages/TodoList/TodoList'
import { NotFound } from './pages/NotFound'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from './redux/auth/operations'
import { useEffect } from 'react'
import { Articles } from './pages/Articles/Articles'
import { NewArticle } from './pages/NewArticle/NewArticle'
import { PrivateRoute } from './routesConfig/PrivateRoute'
import { PublicRoute } from './routesConfig/PublicRoute'
import { selectIsRefresh } from './redux/auth/selectors'
import { Loader } from './components/Loader'

export const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])

	const isRefresh = useSelector(selectIsRefresh)

	return isRefresh ? (
		<Loader />
	) : (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<h1>Homepage</h1>} />
				<Route
					path='/tasks'
					element={
						<PrivateRoute>
							<TodoList />
						</PrivateRoute>
					}
				/>
				<Route
					path='/articles'
					element={
						<PrivateRoute>
							<Articles />
						</PrivateRoute>
					}
				/>
				<Route path='/articles/new' element={<NewArticle />} />
				<Route
					path='/register'
					element={
						<PublicRoute>
							<Register />
						</PublicRoute>
					}
				/>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}
