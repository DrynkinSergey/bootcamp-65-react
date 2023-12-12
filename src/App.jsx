import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Counter } from './components/Counter/Counter'
import { Employee } from './components/Employees/Employee'
import Modal from './components/Modal/Modal'
import { Posts } from './components/Posts/Posts'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { TodoList } from './components/TodoList/TodoList'
import './styles.css'

export const App = ({ user }) => {
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
