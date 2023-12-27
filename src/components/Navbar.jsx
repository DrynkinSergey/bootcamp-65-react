import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/auth/selectors'
import { logoutThunk } from '../redux/auth/operations'

export const Navbar = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const dispatch = useDispatch()
	return (
		<div className='text-white font-bold flex gap-4'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/tasks'>Todos</NavLink>
			<NavLink to='/articles'>Articles</NavLink>
			<NavLink to='/articlesRTK'>RTK QUERY</NavLink>
			{!isLoggedIn && (
				<>
					<NavLink to='/login'>Login</NavLink>
					<NavLink to='/register'>SignUp</NavLink>
				</>
			)}

			{isLoggedIn && (
				<>
					|<button onClick={() => dispatch(logoutThunk())}>Exit</button>
				</>
			)}
		</div>
	)
}
