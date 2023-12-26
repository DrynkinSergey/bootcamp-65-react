import React, { useEffect, useState } from 'react'
import { ArticleItem } from './ArticleItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/articles/operations'
import { selectArticles } from '../../redux/selectors'
import { Link } from 'react-router-dom'

export const Articles = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch])
	const articles = useSelector(selectArticles)
	const [value, setValue] = useState('')
	return (
		<>
			<Link to='/articles/new'>Add article</Link>
			<div>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
			</div>
			<ul>
				{articles?.map(article => (
					<li key={article.id}>
						<ArticleItem {...article} />
					</li>
				))}
			</ul>
		</>
	)
}
