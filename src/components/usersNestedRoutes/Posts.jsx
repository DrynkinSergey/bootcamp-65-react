import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostsByUserId } from '../../services/api'
import Modal from '../Modal/Modal'
import { useModal } from '../../hooks/useModal'
import { useHttp } from '../../hooks/useHttp'

const Posts = () => {
	const { userId } = useParams()

	const { isOpen, toggle } = useModal()
	const [currentPost, setCurrentPost] = useState(null)

	const [posts, _, error] = useHttp(fetchPostsByUserId, userId)

	const handleShowPost = post => {
		toggle()
		setCurrentPost(post)
	}
	if (error) {
		return <h1>Server is broken</h1>
	}
	return (
		<div>
			<h2>Posts</h2>
			<ol>
				{posts?.map(item => (
					<li onClick={() => handleShowPost(item)} key={item.id}>
						{item.title}
					</li>
				))}
			</ol>
			{isOpen ? (
				<Modal closeModal={toggle}>
					<h2>{currentPost.title}</h2>
					<h3>{currentPost.body}</h3>
					<h3>Tags:</h3>
					<ul>
						{currentPost.tags.map((tag, index) => (
							<li key={index}>{tag}</li>
						))}
					</ul>
				</Modal>
			) : null}
		</div>
	)
}

export default Posts
