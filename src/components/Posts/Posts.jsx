import React, { Component } from 'react'
import SearchForm from './SearchForm'
import { PostList } from './PostList'
import styled from 'styled-components'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Comment } from 'react-loader-spinner'

export class Posts extends Component {
	state = {
		posts: [],
		loading: false,
		error: null,
		skip: 0,
		searchQuery: '',
		totalPosts: null,
	}

	async componentDidMount() {
		try {
			this.setState({ loading: true })
			// Робимо запит, отримуємо пости
			const { posts, total } = await fetchPosts()
			// Записуємо пости в стейт
			this.setState({ posts, totalPosts: total })
		} catch (error) {
			console.log(error.message)
		} finally {
			this.setState({ loading: false })
		}
	}

	async componentDidUpdate(_, prevState) {
		if (!this.state.searchQuery && prevState.skip !== this.state.skip) {
			try {
				this.setState({ loading: true })
				// Робимо запит, отримуємо пости
				const { posts, total } = await fetchPosts({ skip: this.state.skip })
				// Записуємо пости в стейт
				this.setState(prevState => ({ posts: [...prevState.posts, ...posts], totalPosts: total }))
			} catch (error) {
				console.log(error.message)
			} finally {
				this.setState({ loading: false })
			}
		}

		if (
			(this.state.searchQuery && prevState.searchQuery !== this.state.searchQuery) ||
			(this.state.searchQuery && prevState.skip !== this.state.skip)
		) {
			try {
				this.setState({ loading: true })

				// Робимо запит, отримуємо пости
				const { posts, total } = await fetchPostsByQuery({ skip: this.state.skip, q: this.state.searchQuery })
				// Записуємо пости в стейт
				this.setState(prevState => ({ posts: [...prevState.posts, ...posts], totalPosts: total }))
			} catch (error) {
				console.log(error.message)
			} finally {
				this.setState({ loading: false })
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
		const { posts, totalPosts, loading } = this.state
		return (
			<div>
				<SearchForm handleSetSearchQuery={this.handleSetSearchQuery} />
				<PostList posts={posts} />
				{!posts.length && !loading && <h1>Smth went wrong! Try again</h1>}
				{loading && !posts.length && (
					<div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
						<Comment
							visible={true}
							height='180'
							width='180'
							ariaLabel='comment-loading'
							wrapperStyle={{}}
							wrapperClass='comment-wrapper'
							color='#fff'
							backgroundColor='#F4442E'
						/>
					</div>
				)}
				{posts.length && posts.length < totalPosts ? (
					<StyledBtn onClick={this.handleLoadMore}>{loading ? 'Loading' : 'Load more'}</StyledBtn>
				) : null}
			</div>
		)
	}
}

const StyledBtn = styled.button`
	margin: 40px auto;
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
