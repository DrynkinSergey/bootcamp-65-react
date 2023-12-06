import React from 'react'
import './styles.css'
import { Employee } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { RegisterFormUncontrolled } from './components/RegisterForm/RegisterFormUncontrolled'
import Modal from './components/Modal/Modal'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'

export const App = () => {
	return (
		<>
			{/* <Counter /> */}
			{/* <Employee /> */}
			<ColorPicker colors={colors} />
			{/* <RegisterForm /> */}
			{/* <RegisterFormUncontrolled /> */}
		</>
	)
}
