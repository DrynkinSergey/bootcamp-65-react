import React from 'react'
import './styles.css'
import { TodoList } from './components/TodoList/TodoList'
import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'

export const App = () => {
	return (
		<>
			<Employee />
			<RegisterForm />
		</>
	)
}
