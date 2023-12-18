import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	// Імпорт Провайдера і передача стору з нашого файла стор
	// Для роботи в проекті редакс
	<Provider store={store}>
		<App />
	</Provider>
)
