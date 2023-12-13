import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
	return (
		<Wrapper>
			<div>
				<h2>This page is not available!</h2>
				<Link to='/'>Go home!</Link>
			</div>
		</Wrapper>
	)
}

export default NotFound
export const Wrapper = styled.div`
	display: grid;
	place-content: center;
`
