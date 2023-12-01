import React from 'react'
import PropTypes from 'prop-types'
export const Modal = ({ myBestTitleEver, children, handleClick }) => {
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

Modal.propTypes = {
	myBestTitleEver: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func,
}
