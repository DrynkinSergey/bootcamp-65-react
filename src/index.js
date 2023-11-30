import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// <a href='/' id='link'>Text</a>
// const element = React.createElement(
// 	'a',
// 	{
// 		href: '/',
// 		id: 'link',
// 	},
// 	'My first link'
// )
// console.log(element)
// import App from './App'
const element = React.createElement(
	'div',
	{},
	React.createElement('h1', { id: 'Title' }, React.createElement('span', {}, 'Hello i am span'))
)

const elementJSX = (
	<div>
		<h1 id='Title'>
			<span>Hello i am span JSX</span>
		</h1>
	</div>
)
const Header = () => {
	return (
		<header>
			<h1>Welcome</h1>
			<hr />
		</header>
	)
}

const MyComponent = () => {
	const title = 'Hello React'

	return (
		<div>
			<Header />
			<h1>{title}</h1>
			<section>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores officiis fugit fugiat, neque autem ea impedit
					reiciendis necessitatibus possimus optio corporis nam deserunt beatae repudiandae voluptatibus suscipit
					explicabo, animi placeat.
				</p>
			</section>
		</div>
	)
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
