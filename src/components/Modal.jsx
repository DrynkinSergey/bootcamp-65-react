import React from 'react'

export const Modal = ({ myBestTitleEver, children }) => {
	return (
		<div>
			<div>
				<h2>{myBestTitleEver}</h2>
				<hr />
				{children}
			</div>
		</div>
	)
}
