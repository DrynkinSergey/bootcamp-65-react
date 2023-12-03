import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

const Modal = ({ children }) => {
	return (
		<ModalWrapper>
			<ModalContent>
				<>
					<h1>Modal</h1>
					<hr />
				</>
				<CloseButton>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>
	)
}

export default Modal
