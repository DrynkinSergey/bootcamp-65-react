import React from 'react'
import styled from 'styled-components'

export const PostCard = () => {
	return (
		<StyledCard>
			<h2>Title</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, ea similique. Eaque unde quae consequuntur
				reprehenderit incidunt hic minima mollitia voluptate sunt veniam officiis magni modi cumque expedita, molestiae
				maxime!
			</p>
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
