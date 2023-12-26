import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})
