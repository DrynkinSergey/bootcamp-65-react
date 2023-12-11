import React, { useState } from 'react'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledForm, StyledInput, StyledLabel, StyledTitle } from './RegisterForm.styled'

const INITIAL_STATE = {
	firstName: '',
	email: '',
	password: '',
	gender: 'female',
	country: 'ukraine',
	rules: false,
}
export const RegisterForm = () => {
	const [formState, setFormState] = useState(INITIAL_STATE)

	const handleSubmit = e => {
		e.preventDefault()
		console.log(formState)
		setFormState(INITIAL_STATE)
		// setState({
		// 	firstName: '',
		// 	email: '',
		// 	password: '',
		// 	gender: 'female',
		// 	country: 'ukraine',
		// })
	}

	const handleChangeInput = e => {
		const { target } = e
		const { name, value } = target
		if (name === 'rules') {
			// setState({ rules: !state.rules })
			setFormState(prevState => ({ ...prevState, rules: !prevState.rules }))
			return
		}
		setFormState(prevState => ({
			...prevState,
			[name]: value,
		}))
		// setState({ [name]: value })
	}

	const { firstName, email, password, gender, country, rules } = formState
	return (
		<FlexContainer>
			<StyledForm onSubmit={handleSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput value={firstName} onChange={handleChangeInput} name='firstName' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput value={email} onChange={handleChangeInput} name='email' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Password:
					<StyledInput value={password} onChange={handleChangeInput} type='password' name='password' />
				</StyledLabel>
				<br />
				<StyledLabel>Gender:</StyledLabel>
				<input checked={gender === 'male'} value='male' onChange={handleChangeInput} type='radio' name='gender' /> Male
				<input
					onChange={handleChangeInput}
					type='radio'
					name='gender'
					checked={gender === 'female'}
					value='female'
				/>{' '}
				Female
				<input onChange={handleChangeInput} type='radio' name='gender' checked={gender === 'any'} value='any' /> any
				<br />
				<br />
				<StyledLabel>
					Country:
					<select value={country} onChange={handleChangeInput} name='country'>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='canada'>Canada</option>
					</select>
				</StyledLabel>
				<br />
				<label>
					<input type='checkbox' name='rules' checked={rules} onChange={handleChangeInput} />I agree with rules
				</label>
				<StyledButton disabled={!rules}>Register</StyledButton>
			</StyledForm>
		</FlexContainer>
	)
}

// export class RegisterForm extends React.Component {
// 	state = {
// 		firstName: '',
// 		email: '',
// 		password: '',
// 		gender: 'female',
// 		country: 'ukraine',
// 		rules: false,
// 	}
// handleSubmit = e => {
// 	e.preventDefault()
// 	console.log(state)
// 	setState({
// 		firstName: '',
// 		email: '',
// 		password: '',
// 		gender: 'female',
// 		country: 'ukraine',
// 	})
// }

// handleChangeInput = e => {
// 	const { target } = e
// 	const { name, value } = target
// 	if (name === 'rules') {
// 		setState({ rules: !state.rules })
// 		return
// 	}

// 		setState({ [name]: value })
// 	}
// 	render() {
// 		const { firstName, email, password, gender, country, rules } = state
// return (
// 	<FlexContainer>
// 		<StyledForm onSubmit={handleSubmit}>
// 			<StyledTitle>Register</StyledTitle>
// 			<StyledLabel>
// 				Name:
// 				<StyledInput value={firstName} onChange={handleChangeInput} name='firstName' />
// 			</StyledLabel>
// 			<br />
// 			<StyledLabel>
// 				Email:
// 				<StyledInput value={email} onChange={handleChangeInput} name='email' />
// 			</StyledLabel>
// 			<br />
// 			<StyledLabel>
// 				Password:
// 				<StyledInput value={password} onChange={handleChangeInput} type='password' name='password' />
// 			</StyledLabel>
// 			<br />
// 			<StyledLabel>Gender:</StyledLabel>
// 			<input
// 				checked={gender === 'male'}
// 				value='male'
// 				onChange={handleChangeInput}
// 				type='radio'
// 				name='gender'
// 			/>{' '}
// 			Male
// 			<input
// 				onChange={handleChangeInput}
// 				type='radio'
// 				name='gender'
// 				checked={gender === 'female'}
// 				value='female'
// 			/>{' '}
// 			Female
// 			<input
// 				onChange={handleChangeInput}
// 				type='radio'
// 				name='gender'
// 				checked={gender === 'any'}
// 				value='any'
// 			/>{' '}
// 			any
// 			<br />
// 			<br />
// 			<StyledLabel>
// 				Country:
// 				<select value={country} onChange={handleChangeInput} name='country'>
// 					<option value='ukraine'>Ukraine</option>
// 					<option value='usa'>USA</option>
// 					<option value='canada'>Canada</option>
// 				</select>
// 			</StyledLabel>
// 			<br />
// 			<label>
// 				<input type='checkbox' name='rules' checked={rules} onChange={handleChangeInput} />I agree with rules
// 			</label>
// 			<StyledButton disabled={!rules}>Register</StyledButton>
// 		</StyledForm>
// 	</FlexContainer>
// )
// 	}
// }
