import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { ArticleItemRTKQ } from './ArticleItemRTKQ'
import { useGetArticlesQuery } from '../../redux/articlesAPI'

export const ArticlesRTKQ = () => {
	const [value, setValue] = useState('')
	const { data, isLoading, isError, error } = useGetArticlesQuery()
	useEffect(() => {
		console.log(isError)
		console.log(error)
	}, [error, isError])
	return (
		<>
			<Link to='/articlesRTK/new'>Add article</Link>
			<div>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
			</div>
			{isLoading && <h2>Loading...</h2>}
			{isError && <h2>{error.message}</h2>}
			<ul>
				{data?.map(article => (
					<li key={article.id}>
						<ArticleItemRTKQ {...article} />
					</li>
				))}
			</ul>
		</>
	)
}
