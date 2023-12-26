import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
				<ToastContainer autoClose={1500} />
			</PersistGate>
		</Provider>
	</BrowserRouter>
)
