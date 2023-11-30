import { Header } from './components/Header'
import { Section } from './components/Section'

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

	return (
		<div>
			<Header title='React Project' />
			<Section sectionTitle='Movies' data={moviesData} />
			<Section sectionTitle='Goods' data={goodsData} />
		</div>
	)
}

export default App
