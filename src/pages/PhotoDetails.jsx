import React, { useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import { fetchImagesById } from '../services/pexelsApi'
import styled from 'styled-components'

export const PhotoDetails = () => {
	const { imageId } = useParams()
	const location = useLocation()
	console.log(location)
	const goBackRef = useRef(location.state?.from || '/photos')
	const [photo] = useHttp(fetchImagesById, imageId)
	return (
		<div>
			<Link to={goBackRef.current}>Go back to photos!</Link>
			<h1>Photo #{imageId}</h1>
			{photo ? (
				<StyledPhotoInfo>
					<div>
						<img src={photo.src.landscape} alt={photo.alt} />
					</div>
					<h2>Title:{photo.alt}</h2>
					<h3>Photographer:{photo.photographer}</h3>
					<h3>Colored gamma:{photo.avg_color}</h3>
				</StyledPhotoInfo>
			) : (
				<h2>Loading your photo info....</h2>
			)}
		</div>
	)
}

const StyledPhotoInfo = styled.div`
	div {
		overflow: hidden;
		width: 100%;
		img {
			width: 100%;
			height: 450px;
			object-fit: cover;
		}
	}
`
