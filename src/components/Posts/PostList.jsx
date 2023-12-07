import React from 'react'
import { PostCard } from './PostCard'
import styled from 'styled-components'

export const PostList = ({ posts }) => {
	return (
		<StyledSection>
			<h1>Posts</h1>
			<ul>
				{posts.map(post => (
					<PostCard key={post.id} {...post} />
				))}
			</ul>
		</StyledSection>
	)
}

const StyledSection = styled.section`
	padding: 20px 10px;
	& h1 {
		text-align: center;
		font-weight: 700;
		text-decoration: underline;
		font-size: 2.5rem;
	}
	& ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
		padding: 20px 0;
		margin: 0 auto;
		gap: 15px;
		justify-content: center;
	}
`
