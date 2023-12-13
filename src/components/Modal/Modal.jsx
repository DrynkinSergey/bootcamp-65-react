import React from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.querySelector('#modalRoot')

export function Modal({ children, closeModal, title }) {
	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
			closeModal()
		}
	}

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				closeModal()
			}
		}
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal])
	return createPortal(
		<ModalWrapper onClick={handleBackdropClick}>
			<ModalContent>
				<>
					<h1>{title?.split(' ')[0]}</h1>
					<hr />
				</>
				<CloseButton onClick={closeModal}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>,
		modalRoot
	)
}

export default Modal
