import React from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends React.Component {
	intervalId = null
	timeoutId = null

	componentDidMount() {
		console.log('Mодалка є на екрані')
		document.addEventListener('keydown', this.handleKeyDown)

		document.body.style.overflow = 'hidden'
		this.intervalId = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)

		this.timeoutId = setTimeout(() => {
			console.log('BADABUM!!!!!')
		}, 3000)
		console.log(this.intervalId)
	}

	componentWillUnmount() {
		document.body.style.overflow = 'visible'
		console.log('Модалка закривається! ')
		clearInterval(this.intervalId)
		clearTimeout(this.timeoutId)
		document.removeEventListener('keydown', this.handleKeyDown)
	}

	handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
			this.props.closeModal()
		}
	}

	handleKeyDown = e => {
		if (e.key === 'Escape') {
			this.props.closeModal()
		}
	}

	render() {
		const { children, closeModal, title } = this.props
		return (
			<ModalWrapper onClick={this.handleBackdropClick}>
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
}
// const Modal = ({ children }) => {
// return (
// 	<ModalWrapper>
// 		<ModalContent>
// 			<>
// 				<h1>Modal</h1>
// 				<hr />
// 			</>
// 			<CloseButton>×</CloseButton>
// 			{children}
// 		</ModalContent>
// 	</ModalWrapper>
// )
// }

export default Modal
