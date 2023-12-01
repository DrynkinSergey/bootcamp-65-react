import PropTypes from 'prop-types'

export const Section = ({ sectionTitle = 'Section', data = [] }) => {
	return (
		<section>
			<h2>{sectionTitle}</h2>
			<ol>
				{data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ol>
		</section>
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
