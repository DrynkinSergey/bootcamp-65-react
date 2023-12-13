import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<ThemeProvider theme={theme}>
		{/* Обов'язково для gh-pages */}
		{/* <BrowserRouter basename='/goit-hw-05-movies'> */}
		{/* 1. Додати BrowserRouter щоб працювали наші маршрути */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>
)
