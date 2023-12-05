import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledForm, StyledInput, StyledLabel, StyledTitle } from './RegisterForm.styled'

export const RegisterFormUncontrolled = () => {
	const handleSubmit = event => {
		event.preventDefault()
		const form = event.target
		const name = form.elements.name.value
		const email = form.elements.email.value
		const password = form.elements.password.value
		const gender = form.elements.gender.value
		const country = form.elements.country.value
		const formData = new FormData()
		formData.append('name', name)
		formData.append('email', email)
		console.log({ name, email, password, gender, country })
		form.reset()
	}
	return (
		<FlexContainer>
			<StyledForm onSubmit={handleSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput name='name' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput name='email' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Password:
					<StyledInput name='password' type='password' />
				</StyledLabel>
				<br />
				<StyledLabel>Gender:</StyledLabel>
				<input type='radio' name='gender' /> Male
				<input type='radio' name='gender' /> Female
				<br />
				<br />
				<StyledLabel>
					Country:
					<select name='country'>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='canada'>Canada</option>
					</select>
				</StyledLabel>
				<br />
				<StyledButton>Register</StyledButton>
			</StyledForm>
		</FlexContainer>
	)
}
