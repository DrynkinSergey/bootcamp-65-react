import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addArticleThunk } from '../redux/articles/operations'
import { selectUser } from '../redux/selectors'

export const ArticleForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const submit = data => {
		dispatch(addArticleThunk({ ...data, tags: data.tags.split(','), author: user, createdAt: new Date(Date.now()) }))
		reset()
		navigate('/articles')
	}
	return (
		<form className='border-2 w-[90%] mx-auto py-8 px-4 border-black grid gap-4' onSubmit={handleSubmit(submit)}>
			<input placeholder='Article title' className='border-2 border-black rounded-md' {...register('title')} />
			<textarea placeholder='Article text' className='border-2 border-black rounded-md' {...register('description')} />
			<input placeholder='Article tags' className='border-2 border-black rounded-md' {...register('tags')} />
			<button className='border-2 border-black rounded-md bg-green-500'>Add Article</button>
			<button className='border-2 border-black rounded-md bg-red-500' type='button'>
				Cancel
			</button>
		</form>
	)
}
