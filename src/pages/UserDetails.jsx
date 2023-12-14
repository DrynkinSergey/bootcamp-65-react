import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { fetchUserById } from '../services/api'
import { useHttp } from '../hooks/useHttp'
import { StyledNavLink } from '../components/Layout'
import { Suspense, useRef } from 'react'

const UserDetails = () => {
	const { userId } = useParams()

	const [user] = useHttp(fetchUserById, userId)
	// 3. Отримуємо знову об'єкт локації
	const location = useLocation()
	console.log(location)
	// 4. Записую об'єкт локації в реф. Для того, Щоб не загубити його при ововлені компонента
	const goBackRef = useRef(location.state?.from || '/users')
	// 5. Отримуємо можливість відправити людину по якомусь маршруту
	const navigate = useNavigate()

	const handleGoBack = () => {
		// 6. Передаємо в навігейт  наш реф з локацією звідки я прийшов
		navigate(goBackRef.current)
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
			<Suspense fallback={<h1>Loading second suspense</h1>}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default UserDetails
