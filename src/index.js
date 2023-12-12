import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { createContext } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))

const user = {
	name: 'Petro',
}

export const MyContext = createContext(null)

const contextValue = {
	age: 43,
	email: 'test@123.com.ua',
	sayHi: name => {
		console.log(`Hello ${name}`)
	},
}

root.render(
	<ThemeProvider theme={theme}>
		<MyContext.Provider value={contextValue}>
			<App user={user} />
		</MyContext.Provider>
	</ThemeProvider>
)
