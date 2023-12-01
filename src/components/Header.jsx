export const Header = ({ title }) => {
	const isLogin = false

	return (
		<header>
			<h1>{title}</h1>
			<hr />
			{/* Рендер за умовою, у випадку isLogin = true малюється 'Welcome back' */}

			{isLogin && <h2>Welcome back</h2>}

			{/* <h1>{isLogin && 'hello'}</h1> */}
			{/* <h2>{isLogin ? 'Hello' : 'Good bye'}</h2> */}
		</header>
	)
}
