import React from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export class ColorPicker extends React.Component {
	state = {
		currentColor: 'white',
	}

	handleSetColor = color => {
		this.setState({ currentColor: color })
	}

	render() {
		console.log(this.props)
		const { colors } = this.props
		return (
			<StyledBackgroundTheme $bg={this.state.currentColor}>
				<StyledColorPalette>
					<h1>Наш обраний колір: {this.state.currentColor}</h1>
					<StyledColorsList>
						{colors.map(item => (
							<StyledColor key={item.id} onClick={() => this.handleSetColor(item.color)}>
								{item.color}
							</StyledColor>
						))}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		)
	}
}
// export const ColorPicker = ({ colors = [] }) => {
// return (
// 	<StyledBackgroundTheme>
// 		<StyledColorPalette>
// 			<StyledColorsList>
// 				{colors.map(item => (
// 					<StyledColor key={item.id}>{item.color}</StyledColor>
// 				))}
// 			</StyledColorsList>
// 		</StyledColorPalette>
// 	</StyledBackgroundTheme>
// )
// }
