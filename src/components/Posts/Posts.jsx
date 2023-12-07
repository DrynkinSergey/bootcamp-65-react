import React, { Component } from 'react'
import SearchForm from './SearchForm'
import { PostList } from './PostList'
import styled from 'styled-components'
import { fetchPosts } from '../../services/api'

export class Posts extends Component {
	state = {
		posts: [],
		loading: false,
		error: null,
	}

	async componentDidMount() {
		try {
			// Робимо запит, отримуємо пости
			const { posts } = await fetchPosts()
			// Записуємо пости в стейт
			this.setState({ posts })
		} catch (error) {
			console.log(error.message)
		}
	}

	render() {
		const { posts } = this.state
		return (
			<div>
				<SearchForm />
				<PostList posts={posts} />
				<StyledBtn>Load more</StyledBtn>
			</div>
		)
	}
}

const StyledBtn = styled.button`
	margin: 0 auto;
	font-size: 1.5rem;
	padding: 4px 12px;
	display: block;
	border: none;
	box-shadow: 2px 2px 4px 1px black;
	border-radius: 8px;
	background: teal;
	color: white;
	font-weight: 500;
	transition: all 0.3s ease;
	cursor: pointer;
	&:hover {
		background: #006060;
	}
`
