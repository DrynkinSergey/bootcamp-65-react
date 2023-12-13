import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { fetchUserById } from '../services/api'
import { useHttp } from '../hooks/useHttp'
import { StyledNavLink } from '../components/Layout'

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
			<StyledNavLink to='info'>info by user</StyledNavLink>
			<StyledNavLink to='posts'>posts by user</StyledNavLink>
			<Outlet />
		</div>
	)
}

export default UserDetails
