import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const Register = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onSubmit',
	})
	const navigate = useNavigate()
	const submit = data => {
		console.log(data)
		navigate('/photos')
		reset()
	}
	return (
		<div>
			<h1>Register form</h1>
			<StyledForm onSubmit={handleSubmit(submit)}>
				<input
					{...register('name', {
						required: 'Name is required!',
						minLength: { value: 3, message: 'Name must be more than 3' },
						maxLength: { value: 13, message: 'Name must be less than 13' },
					})}
					placeholder='Enter the name'
				/>
				{errors?.name && <div>{errors.name.message}</div>}
				<input
					{...register('email', {
						required: 'email is required!',
						minLength: { value: 3, message: 'email must be more than 3' },
						maxLength: { value: 13, message: 'email must be less than 13' },
					})}
					placeholder='Enter the email'
				/>
				{errors?.email && <div>{errors.email.message}</div>}
				<input
					{...register('password', {
						required: 'password is required!',
						minLength: { value: 6, message: 'password must be more than 6' },
						maxLength: { value: 12, message: 'password must be less than 12' },
					})}
					placeholder='Enter the password'
				/>
				{errors?.password && <div>{errors.password.message}</div>}
				<select {...register('country')} placeholder='Enter the password'>
					<option value='usa'>USA</option>
					<option value='ua'>Ukraine</option>
				</select>
				<input type='checkbox' {...register('agree')} /> I am agree!
				<button>Register!</button>
			</StyledForm>
		</div>
	)
}

// export const Register = () => {
// 	const [name, setName] = useState('')
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')

// 	const handleSubmit = e => {
// 		e.preventDefault()
// 		console.log({ name, email, password })
// 		setName('')
// 		setEmail('')
// 		setPassword('')
// 	}
// 	return (
// 		<div>
// 			<h1>Register form</h1>
// 			<form onSubmit={handleSubmit}>
// 				<input value={name} onChange={e => setName(e.target.value)} placeholder='Enter the name' />
// 				<input value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter the email' />
// 				<input value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter the password' />
// 				<button>Register!</button>
// 			</form>
// 		</div>
// 	)
// }
const StyledForm = styled.form`
	display: grid;
	gap: 10px;
	div {
		color: red;
	}
`
