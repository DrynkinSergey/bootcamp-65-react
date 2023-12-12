import React, { useCallback, useContext, useEffect, useState } from 'react'
import SearchForm from './SearchForm'
import { PostList } from './PostList'
import styled from 'styled-components'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Comment } from 'react-loader-spinner'
import { UserContext } from '../../context/ContextProvider'

export const Posts = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [skip, setSkip] = useState(0)
	const [searchQuery, setSearchQuery] = useState('')
	const [totalPosts, setTotalPosts] = useState(null)

	const { user, logout } = useContext(UserContext)

	// xd01r10
	// r010dx
	// r001xr
	// r001xr

	const getData = useCallback(async () => {
		try {
			setLoading(true)
			setError(null)

			//Перевіряється чи є у нас строка пошуку
			const { posts, total } = searchQuery
				? // Якщо є - зробити запит по цій строці
				  await fetchPostsByQuery({ skip, q: searchQuery })
				: // Якщо нема - зробити запит без ключового слова
				  await fetchPosts({ skip })

			setPosts(prev => [...prev, ...posts])
			setTotalPosts(total)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}, [skip, searchQuery])

	useEffect(() => {
		getData()
	}, [searchQuery, skip, getData])

	const handleLoadMore = () => {
		setSkip(prev => prev + 4)
	}
	const handleSetSearchQuery = text => {
		setSearchQuery(text)
		setPosts([])
		setSkip(0)
	}

	return (
		<div>
			<SearchForm logout={logout} user={user} handleSetSearchQuery={handleSetSearchQuery} />
			<PostList posts={posts} />
			{/* Якщо трапилась помилка і немає завантаження */}
			{error && <h1>Server is dead, try again later</h1>}

			{/* Якщо повернулось пустий массив */}
			{!posts.length && !loading && !error && <h1>Smth went wrong! Try again</h1>}

			{/* Якщо йде завантаження перший раз. коли не існує даних*/}
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

			{/* Якщо нема даних або наша кількість постів привищує тотал  !!!! НЕ показувати кнопку */}

			{posts.length && posts.length < totalPosts ? (
				<StyledBtn onClick={handleLoadMore}>{loading ? 'Loading' : 'Load more'}</StyledBtn>
			) : null}
		</div>
	)
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
