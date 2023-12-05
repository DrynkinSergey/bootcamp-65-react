import React from 'react'
import './styles.css'
import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { RegisterFormUncontrolled } from './components/RegisterForm/RegisterFormUncontrolled'
import Modal from './components/Modal/Modal'

export const App = () => {
	return (
		<>
			<Employee />
			<Modal />
			{/* <RegisterForm /> */}
			{/* <RegisterFormUncontrolled /> */}
		</>
	)
}
