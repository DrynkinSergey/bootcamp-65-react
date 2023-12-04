import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import { StyledForm, StyledInput, StyledLabel, StyledTitle } from './RegisterForm.styled'

export const RegisterFormUncontrolled = () => {
	return (
		<FlexContainer>
			<StyledForm>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput />
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
			</StyledForm>
		</FlexContainer>
	)
}
