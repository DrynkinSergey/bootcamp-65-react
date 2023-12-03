import styled from 'styled-components'

export const ModalWrapper = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
	position: relative;
	background-color: white;
	padding: 20px;
	overflow: hidden;
	max-width: 1000px;
	border-radius: 5px;
`

export const CloseButton = styled.button`
	position: absolute;
	top: 5px;
	right: 5px;
	background-color: transparent;
	border: none;
	font-size: 20px;
	cursor: pointer;
`
