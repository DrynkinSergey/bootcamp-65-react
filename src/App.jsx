import styled from 'styled-components'
import { Button } from './components/Button/Button'
import { Header } from './components/Header/Header'
import { HeaderStyled } from './components/Header/HeaderStyled'
import { Modal } from './components/Modal'
import { Post } from './components/Post'
import { Section } from './components/Section/Section'
import { User } from './components/User/User'
import colors from './assets/colors.json'

// Підключення файлу стилів
import './styles.css'

function App() {
	const moviesData = [
		{ title: 'Terminator ', id: '1', fav: false },
		{ title: 'Taxi ', id: '2', fav: true },
		{ title: 'GOT ', id: '3', fav: false },
	]
	const goodsData = [
		{ title: 'Carrot ', id: '1', fav: false },
		{ title: 'Potato ', id: '2', fav: true },
		{ title: 'Laptop ', id: '3', fav: true },
		{ title: 'Mouse ', id: '4', fav: false },
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
		<Wrapper>
			<Header title='React Project' />
			<Section sectionTitle='Movies' data={moviesData} />
			<Section sectionTitle='Goods' data={goodsData} />

			<h1 className='title'>test styles </h1>
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

			<Flex>
				{colors.map(item => (
					<Box key={item.color} $size='100px' $color={item.color} />
				))}
			</Flex>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: ${props => props.theme.colors.bg};
	color: ${props => props.theme.colors.text};
`

const Flex = styled.div`
	display: flex;
	padding: 100px 20px;
	gap: 10px;
`

const Box = styled.div`
	width: ${props => props.$size};
	height: ${props => props.$size};
	background-color: ${props => props.$color || 'black'};
`

export default App
