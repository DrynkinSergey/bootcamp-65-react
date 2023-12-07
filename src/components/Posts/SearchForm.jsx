import React, { Component } from 'react'
import styled from 'styled-components'

export default class SearchForm extends Component {
	render() {
		return (
			<StyledWrapperForm>
				<StyledForm>
					<input type='text' />
					<button>Search</button>
				</StyledForm>
			</StyledWrapperForm>
		)
	}
}
const StyledForm = styled.form`
	display: flex;
	gap: 10px;
	input {
		border-radius: 8px;
		padding: 4px 10px;
		box-shadow: 2px 2px 4px 1px gray;
	}
`
const StyledWrapperForm = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
	background-color: teal;
`
