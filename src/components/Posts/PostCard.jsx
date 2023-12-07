import React from 'react'
import styled from 'styled-components'

export const PostCard = ({ id, title, body }) => {
	return (
		<StyledCard>
			<h2>{title}</h2>
			<p>{body}</p>
		</StyledCard>
	)
}

const StyledCard = styled.li`
	border: 1px solid black;
	list-style: none;
	border-radius: 12px;
	box-shadow: 2px 2px 4px 3px gray;
	padding: 10px;
`
