import React from 'react'

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
