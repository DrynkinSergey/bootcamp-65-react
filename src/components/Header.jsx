import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
	return (
		<header className='text-3xl py-4 bg-blue-950 flex justify-between px-4'>
			<h2 className='text-red-500 font-bold text-center  md:text-white lg:text-violet-600 hover:text-white transition-colors duration-300'>
				Redux | Auth
			</h2>
			<Navbar />
		</header>
	)
}
