import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.pexels.com/v1/',
	headers: {
		Authorization: process.env.REACT_APP_PEXELS_KEY,
	},
})

const normalizeData = data =>
	data.map(({ id, avg_color, alt, photographer, src: { landscape } }) => ({
		id,
		alt,
		photographer,
		img: landscape,
		avg_color,
	}))

export const fetchImages = async () => {
	const { data } = await instance.get('search', {
		params: {
			query: 'code',
		},
	})
	return normalizeData(data.photos)
}

export const fetchImagesById = async id => {
	const { data } = await instance.get(`photos/${id}`)
	return data
}
