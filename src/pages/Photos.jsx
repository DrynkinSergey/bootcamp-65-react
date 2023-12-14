import React from 'react'
import { useHttp } from '../hooks/useHttp'
import { fetchImages } from '../services/pexelsApi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Photos = () => {
	const [photos] = useHttp(fetchImages)
	return (
		<div>
			<h1>Photos</h1>
			<StyledList>
				{photos?.map(image => (
					<li key={image.id}>
						<Link to={image.id.toString()}>
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
