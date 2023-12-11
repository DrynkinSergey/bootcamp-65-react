import React, { useState } from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'
import colors from '../../assets/colors.json'

export const ColorPicker = () => {
	const [currentColor, setCurrentColor] = useState('white')

	const handleSetColor = color => {
		setCurrentColor(color)
	}
	return (
		<StyledBackgroundTheme $bg={currentColor}>
			<StyledColorPalette>
				<h1>Наш обраний колір: {currentColor}</h1>
				<StyledColorsList>
					{colors.map(item => (
						<StyledColor key={item.id} onClick={() => handleSetColor(item.color)}>
							{item.color}
						</StyledColor>
					))}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}
