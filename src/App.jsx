import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import { Info } from './components/usersNestedRoutes/Info'
import Posts from './components/usersNestedRoutes/Posts'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='users' element={<Users />} />
					{/* /users/21 */}
					<Route path='users/:userId' element={<UserDetails />}>
						<Route path='info' element={<Info />} />
						<Route path='posts' element={<Posts />} />
					</Route>
				</Route>

				<Route path='about-us' element={<Navigate to='/about' />} />

				<Route path='*' element={<NotFound />} />
				{/* <Route path='*' element={<Navigate to='/' />} /> */}
			</Routes>
		</>
	)
}
