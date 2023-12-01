import PropTypes from 'prop-types'
import { StyledHeader, Title } from './Header.styled'

export const HeaderStyled = ({ title }) => {
	const isLogin = false

	return (
		// inline styles - bad practice
		// <header style={{ backg roundColor: 'teal', color: 'white', fontSize: '2rem', fontWeight: '700' }}>
		<StyledHeader>
			<Title>{title}</Title>
			{/* Рендер за умовою, у випадку isLogin = true малюється 'Welcome back' */}

			{isLogin && <h2>Welcome back</h2>}

			{/* <h1>{isLogin && 'hello'}</h1> */}
			{/* <h2>{isLogin ? 'Hello' : 'Good bye'}</h2> */}
		</StyledHeader>
	)
}

HeaderStyled.propTypes = {
	title: PropTypes.string,
}
