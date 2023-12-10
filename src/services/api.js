import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchPosts = async configParams => {
	const { data } = await axios.get('posts', {
		params: {
			limit: 4,
			...configParams,
		},
	})
	return data
}

export const fetchPostsByQuery = async configParams => {
	const { data } = await axios.get('posts/search', {
		params: {
			limit: 4,
			...configParams,
		},
	})
	return data
}
