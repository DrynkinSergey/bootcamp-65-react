import { useState } from 'react'

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	const close = () => setIsOpen(false)
	const open = () => setIsOpen(true)
	const toggle = () => setIsOpen(prev => !prev)
	return { isOpen, close, open, toggle }
}
