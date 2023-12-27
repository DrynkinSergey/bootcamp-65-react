import React from 'react'
import { Triangle } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<div className='flex justify-center items-center bg-blue-900 min-h-screen'>
			<Triangle
				visible={true}
				height='280'
				width='280'
				color='#c300fe'
				ariaLabel='triangle-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
			<h2 className='text-white text-3xl font-bold text-center'>Auth in progress...</h2>
		</div>
	)
}
