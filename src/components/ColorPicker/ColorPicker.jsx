import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export const ColorPicker = ({ colors = [] }) => {
	return (
		<StyledBackgroundTheme>
			<StyledColorPalette>
				<StyledColorsList>
					{colors.map(item => (
						<StyledColor key={item.id}>{item.color}</StyledColor>
					))}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}
