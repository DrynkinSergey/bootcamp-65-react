import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	// Імпорт Провайдера і передача стору з нашого файла стор
	// Для роботи в проекті редакс
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)
