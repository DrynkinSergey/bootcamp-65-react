import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { selectUser } from '../redux/selectors'

export const Header = () => {
	const navigate = useNavigate()
	const user = useSelector(selectUser)
	return (
		<header className='text-3xl py-4 bg-blue-950 flex justify-between px-4'>
			<h2 className='text-red-500 font-bold text-center  md:text-white lg:text-violet-600 hover:text-white transition-colors duration-300'>
				{user || 'logo'}
			</h2>
			<div>
				<NavLink className='text-white mr-6' to='/articles'>
					Articles
				</NavLink>
				<button onClick={() => navigate('/articles/new')} className='bg-white px-4 py-1 text-xl rounded-md'>
					Add article
				</button>
			</div>
		</header>
	)
}
