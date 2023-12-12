import { createContext, useState } from 'react'

export const UserContext = createContext()

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState('Alex')
	const [isOnline, setIsOnline] = useState(true)

	const login = userName => {
		setUser(userName)
		setIsOnline(true)
	}
	const logout = () => {
		setUser('')
		setIsOnline(false)
	}

	const contextValue = { user, isOnline, login, logout }
	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
}
