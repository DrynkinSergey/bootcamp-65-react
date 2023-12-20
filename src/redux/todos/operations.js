//https://65829e7202f747c83679b79e.mockapi.io/todos

import axios from 'axios'
import { fetchingData, isError, isPending } from './todoSlice'

axios.defaults.baseURL = 'https://65829e7202f747c83679b79e.mockapi.io'

export const fetchTodosThunk = () => async dispatch => {
	try {
		dispatch(isPending())
		const response = await axios.get('todos')
		console.log(response)
		dispatch(fetchingData(response.data))
	} catch (error) {
		dispatch(isError(error.message))
	}
}
