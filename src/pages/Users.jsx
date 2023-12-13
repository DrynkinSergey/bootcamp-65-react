import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'
import { Link } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import styled from 'styled-components'

const Users = () => {
	const [users] = useHttp(fetchUsers)

	return (
		<div>
			<StyledSearch>
				<h2>Users</h2>
				<div>
					<input placeholder='Enter username...' />
					<button>Find</button>
				</div>
			</StyledSearch>
			<hr />
			<StyledList>
				{users?.map(user => (
					<li key={user.id}>
						<Link to={user.id.toString()}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</StyledList>
		</div>
	)
}

export default Users

const StyledList = styled.ul`
	list-style: none;
	display: grid;
	gap: 12px;
	li {
		a {
			color: black;
			text-decoration: none;
			&:hover {
				color: blue;
			}
		}
	}
`
export const StyledSearch = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`
