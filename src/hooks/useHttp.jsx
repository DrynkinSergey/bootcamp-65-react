import { useEffect, useState } from 'react'

export const useHttp = (fetchFn, params) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	useEffect(() => {
		fetchFn(params)
			.then(data => setData(data))
			.catch(error => setError(error.message))
	}, [params, fetchFn])

	return [data, setData, error]
}
