import PropTypes from 'prop-types'
import s from './Header.module.css'
import clsx from 'clsx'
export const Header = ({ title }) => {
	const isLogin = false

	return (
		// inline styles - bad practice
		// <header style={{ backg roundColor: 'teal', color: 'white', fontSize: '2rem', fontWeight: '700' }}>
		<header className='textBlack'>
			<h1 className={clsx(s.title, 'header', 'test')}>{title}</h1>
			{/* Рендер за умовою, у випадку isLogin = true малюється 'Welcome back' */}

			{isLogin && <h2>Welcome back</h2>}

			{/* <h1>{isLogin && 'hello'}</h1> */}
			{/* <h2>{isLogin ? 'Hello' : 'Good bye'}</h2> */}
		</header>
	)
}
Header.propTypes = {
	title: PropTypes.string,
}
