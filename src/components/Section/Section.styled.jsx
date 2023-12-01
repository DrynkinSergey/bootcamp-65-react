import styled from 'styled-components'

export const StyledWrapper = styled.section`
	width: 80%;
	padding: 20px 10px;
	border: 1px solid black;
	margin: 20px auto;
	border-radius: 20px;
`
export const StyledList = styled.ol`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`
export const StyledItem = styled.li`
	/* background-color: ${props => (props.$fav ? 'red' : 'teal')}; */
	background-color: ${props => (props.$index % 2 === 0 ? 'lightgray' : 'white')};
	color: black;
	font-weight: 500;
	padding: 8px 4px;
	border-radius: 8px;
	box-shadow: 2px 2px 4px 1px gray;
	text-align: center;
	transition: 0.3s all ease;
	&:hover {
		background-color: blue;
		cursor: pointer;
	}
`
