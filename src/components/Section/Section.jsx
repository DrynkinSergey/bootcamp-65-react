import PropTypes from 'prop-types'
import s from './Section.module.css'
import clsx from 'clsx'
import { StyledItem, StyledList, StyledWrapper } from './Section.styled'
export const Section = ({ sectionTitle = 'Section', data = [] }) => {
	return (
		<StyledWrapper>
			<h2 className={s.title}>{sectionTitle}</h2>
			<StyledList>
				{data.map((item, index) => (
					// <li className={`${s.item} ${item.fav && s.favourite}`} key={item.id}>

					<StyledItem $index={index} $fav={item.fav} key={item.id}>
						{item.title}
					</StyledItem>
				))}
			</StyledList>
		</StyledWrapper>
	)
}

Section.propTypes = {
	sectionTitle: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			id: PropTypes.string,
		})
	),
}
