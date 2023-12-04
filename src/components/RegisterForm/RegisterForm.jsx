import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledLabel, StyledLoginForm, StyledTitle } from './RegisterForm.styled'

export const RegisterForm = () => {
	return (
		<FlexContainer>
			<StyledLoginForm>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput type='text' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput type='text' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Password:
					<StyledInput type='password' />
				</StyledLabel>
				<br />
				<StyledLabel>Gender:</StyledLabel>
				<input type='radio' name='gender' /> Male
				<input type='radio' name='gender' /> Female
				<br />
				<br />
				<StyledLabel>
					Country:
					<select>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='canada'>Canada</option>
					</select>
				</StyledLabel>
				<br />
				<StyledButton>Register</StyledButton>
			</StyledLoginForm>
		</FlexContainer>
	)
}
