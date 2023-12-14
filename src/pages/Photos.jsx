import React, { useState } from 'react'
import { useHttp } from '../hooks/useHttp'
import { fetchImages } from '../services/pexelsApi'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

const Photos = () => {
	// 1. Використовуємо хук useSearchParams
	// 1.1 Отримуємо дві сущності. 1 - SearchParams - можемо дістати через метод get потрібне поле з url. 2 - setSearchParams - можемо встановити будь-яке поле в url
	const [searchParams, setSearchParams] = useSearchParams()
	const [value, setValue] = useState('')

	// 2. Отримуємо бажане поле з url
	const query = searchParams.get('query') || 'code'

	const [photos] = useHttp(fetchImages, query)

	const location = useLocation()
	// 3. Функція для встановлення поля 'query' в url.
	const handleSetSearchQuery = () => {
		// 3.1 Якщо інпут пустий, очисти поле query в url
		setSearchParams(value ? { query: value } : {})
	}

	return (
		<div>
			<h1>Photos</h1>
			<div>
				<input value={value} onChange={e => setValue(e.target.value)} type='text' />
				<button onClick={handleSetSearchQuery}>Search photos</button>
			</div>
			<StyledList>
				{photos?.map(image => (
					<li key={image.id}>
						<Link state={{ from: location }} to={image.id.toString()}>
							<img src={image.img} alt={image.alt} />
						</Link>
					</li>
				))}
			</StyledList>
		</div>
	)
}
const StyledList = styled.ul`
	list-style: none;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 10px;
	li {
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			transition: all 0.5s ease-in-out;
			&:hover {
				transform: scale(1.2);
			}
		}
	}
`
// id,
// 		alt,
// 		photographer,
// 		img: landscape,
// 		avg_color,
export default Photos
