import React, { Component } from 'react'
import SearchForm from './SearchForm'
import { PostList } from './PostList'
import styled from 'styled-components'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'

export class Posts extends Component {
	state = {
		posts: [],
		loading: false,
		error: null,
		skip: 0,
		searchQuery: '',
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

	async componentDidUpdate(_, prevState) {
		if (!this.state.searchQuery && prevState.skip !== this.state.skip) {
			try {
				// Робимо запит, отримуємо пости
				const { posts } = await fetchPosts({ skip: this.state.skip })
				// Записуємо пости в стейт
				this.setState(prevState => ({ posts: [...prevState.posts, ...posts] }))
			} catch (error) {
				console.log(error.message)
			}
		}

		if (
			(this.state.searchQuery && prevState.searchQuery !== this.state.searchQuery) ||
			(this.state.searchQuery && prevState.skip !== this.state.skip)
		) {
			try {
				// Робимо запит, отримуємо пости
				const { posts } = await fetchPostsByQuery({ skip: this.state.skip, q: this.state.searchQuery })
				// Записуємо пости в стейт
				this.setState(prevState => ({ posts: [...prevState.posts, ...posts] }))
			} catch (error) {
				console.log(error.message)
			}
		}
	}

	handleLoadMore = () => {
		this.setState(prevState => ({ skip: prevState.skip + 4 }))
	}

	handleSetSearchQuery = text => {
		this.setState({ searchQuery: text, posts: [], skip: 0 })
	}

	render() {
		const { posts } = this.state
		return (
			<div>
				<SearchForm handleSetSearchQuery={this.handleSetSearchQuery} />
				<PostList posts={posts} />
				<StyledBtn onClick={this.handleLoadMore}>Load more</StyledBtn>
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
