import React from 'react'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colors from './assets/colors.json'

export const App = () => {
	return (
		<>
			<Counter />
			{/* <ColorPicker colors={colors}  /> */}
			{/* <TodoList /> */}
		</>
	)
}
