import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.pexels.com/v1/search',
	headers: {
		Authorization: process.env.REACT_APP_PEXELS_KEY,
	},
})

export const fetchImages = async () => {
	const { data } = await instance.get('', {
		params: {
			query: 'code',
		},
	})
	return data.photos
}
