import styled from 'styled-components'
export const StyledTitle = styled.h1`
	text-align: center;
	margin-bottom: 30px;
	color: white;
	text-decoration: underline;
`
export const StyledLoginForm = styled.form`
	font-size: calc((1vh + 1vw));
	border: 3px solid lightblue;
	background-color: #71b4f7;
	box-shadow: 3px 4px 7px 3px lightgray;
	width: calc((10vh + 20vw) * 1.2);
	padding: 40px 20px;
	border-radius: 12px;
`
export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	color: white;
`
export const StyledInput = styled.input`
	padding: 5px 10px;
	font-size: calc((1vh + 1vw) * 1.2);
	background-color: inherit;
	border: none;
	outline: none;
	border-bottom: 1px solid;
`
