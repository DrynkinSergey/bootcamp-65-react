import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../services/api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import styled from 'styled-components'

const Users = () => {
	const [users] = useHttp(fetchUsers)

	const [searchParams, setSearchParams] = useSearchParams()
	// 1. Отримати об`єкт локації
	const location = useLocation()
	console.log(location)
	const name = searchParams.get('name') || ''
	const filteredUsers = users?.filter(
		user =>
			user.firstName.toLowerCase().includes(name.toLowerCase()) ||
			user.lastName.toLowerCase().includes(name.toLowerCase())
	)

	return (
		<div>
			<StyledSearch>
				<h2>Users</h2>
				<div>
					<input
						value={name}
						onChange={e => setSearchParams(e.target.value ? { name: e.target.value } : {})}
						placeholder='Enter username...'
					/>
					<button>Find</button>
				</div>
			</StyledSearch>
			<hr />
			<StyledList>
				{filteredUsers?.map(user => (
					<li key={user.id}>
						{/* 2. Передати об'єкт локації (яка в нас URL на даний момент) в компонент userDetails */}
						<Link state={{ from: location }} to={user.id.toString()}>
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
