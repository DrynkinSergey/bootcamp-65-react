# Operation guide

1. Створити файл `operations.js`
2. Додати `axios.defaults.baseUrl`
3. Створити thunk для отримання даних
4. Санка складається з наступних частин:

```javascript
createAsyncThunk('назва_санки', async (перший_параметр, другий_параметр) => {
	try {
		// Запит на сервер
		return response.data
	} catch (err) {
		return rejectWithValue(err.message)
	}
})
```

- назва_санки: Назва операції
- перший_параметр: те, що приходить в момент виклику з компонента (id, title, array, object)
- другий_параметр: зазвичай `thunkApi` . В ньому лежить `dispatch` , `rejectWithValue`
- запит: логіка запиту
- # В 90% треба зробити return після виконання запиту на сервер, повертаємо дані в зовнішній світ!!!
- блок catch: `return rejectWithValue(err.message)` повертає помилку якщо вона станеться в якості payload
- # ВСЕ ЩО ПОВЕРТАЄТЬСЯ З THUNK ПОТРАПЛЯЄ В ACTION.PAYLOAD!

5. Після роботи санки треба створити extraReducers та прийняти дані від санки. Зробити addCase, обробити етап операції (fulfilled, pending, rejected) та записати дані в редакс
