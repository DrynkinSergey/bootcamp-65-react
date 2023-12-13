import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { fetchUserById } from '../services/api'
import { useHttp } from '../hooks/useHttp'

const UserDetails = () => {
	const { userId } = useParams()

	const [user] = useHttp(fetchUserById, userId)

	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate('/users')
	}

	if (!user) {
		return <h1>Loading...</h1>
	}
	return (
		<div>
			<button onClick={handleGoBack}>Go back</button>
			<h2>UserDetails #{userId}</h2>
			<hr />
			<img src={user.image} alt='user avatar' />
			<p>
				{user.firstName} {user.lastName}
			</p>
			<p>{user.email}</p>
			<p>{user.age}</p>
			<p>{user.phone}</p>

			<hr />
			{/* users/21/info */}
			<Link to='info'>info by user</Link>
			<Link to='posts'>posts by user</Link>
			<Outlet />
		</div>
	)
}

export default UserDetails
