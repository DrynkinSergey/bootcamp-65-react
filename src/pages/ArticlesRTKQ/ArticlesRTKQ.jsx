import React, { useState } from 'react'
import { ArticleItem } from './ArticleItem'

import { Link } from 'react-router-dom'

export const ArticlesRTKQ = () => {
	const [value, setValue] = useState('')
	return (
		<>
			<Link to='/articles/new'>Add article</Link>
			<div>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
			</div>
			<ul>
				{[]?.map(article => (
					<li key={article.id}>
						<ArticleItem {...article} />
					</li>
				))}
			</ul>
		</>
	)
}
