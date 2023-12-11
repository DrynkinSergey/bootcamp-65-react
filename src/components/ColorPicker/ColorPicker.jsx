import React, { useState } from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'
import colors from '../../assets/colors.json'

export const ColorPicker = () => {
	const [currentColor, setCurrentColor] = useState('white')

	const handleSetColor = color => {
		// this.setState({ currentColor: color })
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
// export class ColorPicker extends React.PureComponent {
// 	state = {
// 		currentColor: 'white',
// 	}
// 	componentDidUpdate() {
// 		console.log('update')
// 	}

// 	handleSetColor = color => {
// 		this.setState({ currentColor: color })
// 	}

// 	render() {
// return (
// 	<StyledBackgroundTheme $bg={this.state.currentColor}>
// 		<StyledColorPalette>
// 			<h1>Наш обраний колір: {this.state.currentColor}</h1>
// 			<StyledColorsList>
// 				{colors.map(item => (
// 					<StyledColor key={item.id} onClick={() => this.handleSetColor(item.color)}>
// 						{item.color}
// 					</StyledColor>
// 				))}
// 			</StyledColorsList>
// 		</StyledColorPalette>
// 	</StyledBackgroundTheme>
// )
// 	}
// }
