import { useEffect, useState } from 'react'
// Створюємо функцію з назвою use
// Передаємо 2 параметри
export const useHttp = (fetchFn, params) => {
	// Доступне використання у власних хуках інших реакт хуків
	// Використовуємо useState для збереження даних з запиту
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	// Робимо запит на сервер. Отримуємо дані і записуємо їх в стейт
	useEffect(() => {
		fetchFn(params)
			.then(data => setData(data))
			.catch(error => setError(error.message))
	}, [params, fetchFn])

	// Обов'язково повертаємо потрібний функціонал кудись компонентам
	// Це може бути як массив, об'єкт чи просто одне значення
	return [data, setData, error]
}
