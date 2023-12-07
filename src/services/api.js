import axios from 'axios'

// Додали базовий шлях для запиту
axios.defaults.baseURL = 'https://dummyjson.com/'

// Створили функцію для отримання даних
export const fetchPosts = async configParams => {
	// Робимо запит на ендпоінт 'posts'
	// Повертається нам результат, data
	const { data } = await axios.get('1posts', {
		params: {
			limit: 4,
			...configParams,
		},
	})
	// Data повертаємо з фукнції
	return data
}

export const fetchPostsByQuery = async configParams => {
	// Робимо запит на ендпоінт 'posts'
	// Повертається нам результат, data
	const { data } = await axios.get('posts/search', {
		params: {
			limit: 4,
			...configParams,
		},
	})
	// Data повертаємо з фукнції
	return data
}
