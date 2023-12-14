import React, { lazy } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
// import Users from './pages/Users'
// import UserDetails from './pages/UserDetails'
import { Info } from './components/usersNestedRoutes/Info'
// import Posts from './components/usersNestedRoutes/Posts'
import Photos from './pages/Photos'
import { PhotoDetails } from './pages/PhotoDetails'
import { Register } from './pages/Register'

const About = lazy(() => import('./pages/About'))
const Users = lazy(() => import('./pages/Users'))
const UserDetails = lazy(() => import('./pages/UserDetails'))
const Posts = lazy(() => import('./components/usersNestedRoutes/Posts'))

export const App = () => {
	return (
		<>
			{/* 2. Додати роути (маршрути) */}
			<Routes>
				{/* 3. Свторити маршрути для роботи і відображення сторінок */}
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />

					<Route path='photos' element={<Photos />} />
					<Route path='photos/:imageId' element={<PhotoDetails />} />

					<Route path='users' element={<Users />} />
					{/* 4. Динамічний параметр передається через : */}
					<Route path='users/:userId' element={<UserDetails />}>
						{/* <Route index element={<Navigate to='info' />} /> */}
						<Route path='info' element={<Info />} />
						<Route path='posts' element={<Posts />} />
					</Route>

					{/* REGISTER AND LOGIN */}
					<Route path='register' element={<Register />} />
				</Route>
				{/* 6. Редірект */}
				<Route path='about-us' element={<Navigate to='/about' />} />
				{/* 5. Сторінка 404 */}
				<Route path='*' element={<NotFound />} />
				{/* <Route path='*' element={<Navigate to='/' />} /> */}
			</Routes>
		</>
	)
}
