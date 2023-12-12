import { useContext, useState } from 'react'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Counter } from './components/Counter/Counter'
import { Employee } from './components/Employees/Employee'
import Modal from './components/Modal/Modal'
import { Posts } from './components/Posts/Posts'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { TodoList } from './components/TodoList/TodoList'
import './styles.css'
import { UserContext } from './context/ContextProvider'

export const App = ({ user }) => {
	const { login, isOnline } = useContext(UserContext)

	const [loginUser, setLoginUser] = useState('')

	if (!isOnline) {
		return (
			<>
				<input value={loginUser} onChange={e => setLoginUser(e.target.value)} />
				<button onClick={() => login(loginUser)}>Login</button>
			</>
		)
	}

	return (
		<>
			{/* <Counter /> */}
			{/* <ColorPicker /> */}
			{/* <TodoList /> */}
			{/* <Employee /> */}
			{/* <RegisterForm /> */}
			<Posts user={user} />
			{/* <Modal /> */}
		</>
	)
}
