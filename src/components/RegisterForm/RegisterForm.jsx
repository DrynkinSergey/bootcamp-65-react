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

	handleChangeInput = e => {
		const { target } = e
		const { name, value } = target
		if (name === 'rules') {
			this.setState({ rules: !this.state.rules })
			return
		}

		this.setState({ [name]: value })
	}
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
