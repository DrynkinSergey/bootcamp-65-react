import React from 'react'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledForm, StyledInput, StyledLabel, StyledTitle } from './RegisterForm.styled'

export class RegisterForm extends React.Component {
	state = {
		firstName: '',
		email: '',
		password: '',
		gender: 'female',
		country: 'ukraine',
		rules: false,
	}
	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		this.setState({
			firstName: '',
			email: '',
			password: '',
			gender: 'female',
			country: 'ukraine',
		})
	}
	handleChangeName = e => {
		console.log(e.target.value)
	}
	handleChangeEmail = e => {
		console.log(e.target.value)
	}
	handleChangeInput = e => {
		const { target } = e
		const { name, value } = target
		if (name === 'rules') {
			this.setState({ rules: !this.state.rules })
			return
		}
		// console.log(e.target)
		// console.log(name, value)
		// 1. IF - ELSE
		// if (name === 'firstName') {
		// 	this.setState({ firstName: value })
		// } else if (name === 'email') {
		// 	this.setState({ email: value })
		// } else if (name === 'password') {
		// 	this.setState({ password: value })
		// } else if (name === 'gender') {
		// 	this.setState({ gender: value })
		// } else if (name === 'country') {
		// 	this.setState({ country: value })
		// }

		//2. Switch case
		// switch (name) {
		// 	case 'firstName':
		// 		this.setState({ firstName: value })
		// 		break
		// 	case 'email':
		// 		this.setState({ email: value })
		// 		break
		// 	case 'password':
		// 		this.setState({ password: value })
		// 		break
		// 	case 'gender':
		// 		this.setState({ gender: value })
		// 		break
		// 	case 'country':
		// 		this.setState({ country: value })
		// 		break

		// 	default:
		// 		break
		// }

		//3. Dynamic
		this.setState({ [name]: value })
	}
	// DRY
	render() {
		const { firstName, email, password, gender, country, rules } = this.state
		return (
			<FlexContainer>
				<StyledForm onSubmit={this.handleSubmit}>
					<StyledTitle>Register</StyledTitle>
					<StyledLabel>
						Name:
						<StyledInput value={firstName} onChange={this.handleChangeInput} name='firstName' />
					</StyledLabel>
					<br />
					<StyledLabel>
						Email:
						<StyledInput value={email} onChange={this.handleChangeInput} name='email' />
					</StyledLabel>
					<br />
					<StyledLabel>
						Password:
						<StyledInput value={password} onChange={this.handleChangeInput} type='password' name='password' />
					</StyledLabel>
					<br />
					<StyledLabel>Gender:</StyledLabel>
					<input
						checked={gender === 'male'}
						value='male'
						onChange={this.handleChangeInput}
						type='radio'
						name='gender'
					/>{' '}
					Male
					<input
						onChange={this.handleChangeInput}
						type='radio'
						name='gender'
						checked={gender === 'female'}
						value='female'
					/>{' '}
					Female
					<input
						onChange={this.handleChangeInput}
						type='radio'
						name='gender'
						checked={gender === 'any'}
						value='any'
					/>{' '}
					any
					<br />
					<br />
					<StyledLabel>
						Country:
						<select value={country} onChange={this.handleChangeInput} name='country'>
							<option value='ukraine'>Ukraine</option>
							<option value='usa'>USA</option>
							<option value='canada'>Canada</option>
						</select>
					</StyledLabel>
					<br />
					<label>
						<input type='checkbox' name='rules' checked={rules} onChange={this.handleChangeInput} />I agree with rules
					</label>
					<StyledButton disabled={!rules}>Register</StyledButton>
				</StyledForm>
			</FlexContainer>
		)
	}
}

// export const RegisterForm = () => {
// 	return (
// 		<FlexContainer>
// 			<StyledForm>
// 				<StyledTitle>Register</StyledTitle>
// 				<StyledLabel>
// 					Name:
// 					<StyledInput />
// 				</StyledLabel>
// 				<br />
// 				<StyledLabel>
// 					Email:
// 					<StyledInput />
// 				</StyledLabel>
// 				<br />
// 				<StyledLabel>
// 					Password:
// 					<StyledInput type='password' />
// 				</StyledLabel>
// 				<br />
// 				<StyledLabel>Gender:</StyledLabel>
// 				<input type='radio' name='gender' /> Male
// 				<input type='radio' name='gender' /> Female
// 				<br />
// 				<br />
// 				<StyledLabel>
// 					Country:
// 					<select>
// 						<option value='ukraine'>Ukraine</option>
// 						<option value='usa'>USA</option>
// 						<option value='canada'>Canada</option>
// 					</select>
// 				</StyledLabel>
// 				<br />
// 				<StyledButton>Register</StyledButton>
// 			</StyledForm>
// 		</FlexContainer>
// 	)
// }
