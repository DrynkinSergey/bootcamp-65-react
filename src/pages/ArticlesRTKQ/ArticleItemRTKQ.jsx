import { cutText } from '../../helpers/cutText'
import { useSelector } from 'react-redux'
import { formatDistanceToNow } from 'date-fns'
import { selectUserName } from '../../redux/auth/selectors'
import { useDeleteArticleMutation, useRenameArticleMutation } from '../../redux/articlesAPI'

export const ArticleItemRTKQ = ({ id, title, description, tags, author, createdAt }) => {
	const user = useSelector(selectUserName)
	const [deleteArticle] = useDeleteArticleMutation()
	const [rename] = useRenameArticleMutation()
	return (
		<div className='w-[90%] mt-2 mx-auto p-4 border-2 border-black rounded-md shadow-md'>
			<h2 className='text-4xl font-bold'>{title}</h2>
			<p className='italic'>{author}</p>
			<div className='flex gap-4'>
				{tags.map(tag => (
					<span key={tag} className='border-2 border-black px-4'>
						{tag}
					</span>
				))}
			</div>
			<p className='font-light'>{formatDistanceToNow(createdAt, { addSuffix: true })}</p>
			<p className='text-xl'>{cutText(description)}</p>
			<div className='flex gap-4 py-2 mt-4 justify-end'>
				{user === author && (
					<>
						<button
							onClick={() => rename({ id, title, description, tags, author, createdAt })}
							className='border-2 border-black rounded-md px-4 py-1 shadow-md'
						>
							edit
						</button>
						<button
							onClick={() => deleteArticle(id)}
							// onClick={() => dispatch(deleteArticleThunk(id))}
							className='border-2 border-black rounded-md px-4 py-1 shadow-md'
						>
							delete
						</button>
					</>
				)}
				<button className='border-2 border-black rounded-md px-4 py-1 shadow-md'>read more</button>
			</div>
		</div>
	)
}
