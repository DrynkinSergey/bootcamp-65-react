import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<div className='text-white font-bold flex gap-4'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/tasks'>Todos</NavLink>
			<NavLink to='/register'>SignUp</NavLink>
		</div>
	)
}
