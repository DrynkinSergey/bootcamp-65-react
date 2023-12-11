import React from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import { useEffect } from 'react'

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
			console.log('Close modal')
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal])
	return (
		<ModalWrapper onClick={handleBackdropClick}>
			<ModalContent>
				<>
					<h1>{title?.split(' ')[0]}</h1>
					<hr />
				</>
				<CloseButton onClick={closeModal}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>
	)
}

// class Modal extends React.Component {
// 	intervalId = null
// 	timeoutId = null

// 	componentDidMount() {
// 		console.log('Mодалка є на екрані')
// 		document.addEventListener('keydown', this.handleKeyDown)

// 		document.body.style.overflow = 'hidden'
// 		this.intervalId = setInterval(() => {
// 			console.log(new Date().toLocaleTimeString())
// 		}, 1000)

// 		this.timeoutId = setTimeout(() => {
// 			console.log('BADABUM!!!!!')
// 		}, 3000)
// 	}

// 	componentWillUnmount() {
// 		document.body.style.overflow = 'visible'
// 		console.log('Модалка закривається! ')
// 		clearInterval(this.intervalId)
// 		clearTimeout(this.timeoutId)
// 		document.removeEventListener('keydown', this.handleKeyDown)
// 	}

// 	handleBackdropClick = e => {
// 		if (e.target === e.currentTarget) {
// 			this.props.closeModal()
// 		}
// 	}

// 	handleKeyDown = e => {
// 		if (e.key === 'Escape') {
// 			this.props.closeModal()
// 		}
// 	}

// 	render() {
// 		const { children, closeModal, title } = this.props
// return (
// 	<ModalWrapper onClick={this.handleBackdropClick}>
// 		<ModalContent>
// 			<>
// 				<h1>{title?.split(' ')[0]}</h1>
// 				<hr />
// 			</>
// 			<CloseButton onClick={closeModal}>×</CloseButton>
// 			{children}
// 		</ModalContent>
// 	</ModalWrapper>
// )
// 	}
// }

export default Modal
