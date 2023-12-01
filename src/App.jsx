import { Button } from './components/Button'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { Post } from './components/Post'
import { Section } from './components/Section'
import { User } from './components/User'

// Підключення файлу стилів
import './styles.css'

function App() {
	const moviesData = [
		{ title: 'Terminator ', id: '1' },
		{ title: 'Taxi ', id: '2' },
		{ title: 'GOT ', id: '3' },
	]
	const goodsData = [
		{ title: 'Carrot ', id: '1' },
		{ title: 'Potato ', id: '2' },
		{ title: 'Laptop ', id: '3' },
		{ title: 'Mouse ', id: '4' },
	]
	const handleClick = () => {
		console.log(13231)
	}
	const user = {
		id: 123123,
		name: 'Leanne Graham',
		email: 'Sincere@april.biz',
		bio: 'Assumenda harum mollitia neque, officiis veniam repellat sapiente delectus aspernatur',
		skills: ['react', 'vue'],
		isOpenToWork: false,
	}

	return (
		<div>
			<Header title='React Project' />
			<Section sectionTitle='Movies' data={moviesData} />
			<Section sectionTitle='Goods' data={goodsData} />

			<Button>Login</Button>
			<Button>Click</Button>
			<Button>Hello</Button>

			<Modal myBestTitleEver='Холодильник'>
				<h2>Продам холодильник</h2>
				<h3>Гарного стану</h3>
				<button>Купити!</button>
			</Modal>

			<Modal handleClick={handleClick} myBestTitleEver='Post'>
				asfffafads
			</Modal>
			<User user={user} />
		</div>
	)
}

export default App
