import React, { Suspense } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
	return (
		<StyledWrapper>
			<StyledHeader>
				<h2>Logo</h2>
				<nav>
					<StyledNavLink to='/'>Home</StyledNavLink>
					<StyledNavLink to='/about'>About</StyledNavLink>
					<StyledNavLink to='/users'>Users</StyledNavLink>
					<StyledNavLink to='/photos'>Photos</StyledNavLink>
				</nav>
			</StyledHeader>
			<StyledMainContent>
				<Suspense fallback={<h1>Loading....</h1>}>
					<Outlet />
				</Suspense>
			</StyledMainContent>
			<footer>
				<h2>&copy; All right reserved 2023</h2>
			</footer>
		</StyledWrapper>
	)
}

export default Layout

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 40px;
	background-color: lightcoral;
	font-size: 1.2rem;
	nav {
		display: flex;
		gap: 10px;
	}
`

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: white;
	font-weight: 700;
	font-size: 1.5rem;
	margin-right: 5px;
	&.active {
		color: black;
		text-decoration: underline;
	}
`
const StyledMainContent = styled.div`
	flex-grow: 1;
	padding: 10px;
	background-color: lightgray;
`
const StyledWrapper = styled.div`
	display: flex;
	min-height: 100vh;

	flex-direction: column;
	gap: 10px;
	footer {
		background-color: gold;
		text-align: center;
	}
`
