import React from 'react'
import { useForm } from 'react-hook-form'

export const Register = () => {
	const { register, handleSubmit } = useForm()

	const submit = data => {
		console.log(data)
	}
	return (
		<div className='flex justify-center items-center min-h-[80vh] '>
			<form
				onSubmit={handleSubmit(submit)}
				className=' grid gap-4 border-2 border-black rounded-md shadow-md px-10 py-14'
			>
				<label className='flex flex-col gap-2'>
					<span>Name</span>
					<input
						{...register('name')}
						placeholder='Enter the Name'
						className='border-2 border-black p-1 rounded-md'
						type='text'
					/>
				</label>
				<label className='flex flex-col gap-2'>
					<span>Email</span>
					<input
						{...register('email')}
						placeholder='Enter the Email'
						className='border-2 border-black p-1 rounded-md'
						type='text'
					/>
				</label>
				<label className='flex flex-col gap-2'>
					<span>Password</span>
					<input
						{...register('password')}
						placeholder='Enter the Password'
						className='border-2 border-black p-1 rounded-md'
						type='text'
					/>
				</label>
				<button className='border-2 border-black px-4 py-2 rounded-md'>Register</button>
			</form>
		</div>
	)
}
