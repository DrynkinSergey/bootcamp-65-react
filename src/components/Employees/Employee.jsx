import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { useEffect } from 'react'

export const Employee = () => {
	const [users, setUsers] = useState(() => {
		const users = JSON.parse(window.localStorage.getItem('USERS_DATA'))
		if (users?.length) {
			return users
		}
		return userData
	})

	const [searchStr, setSearchStr] = useState('')
	const [isAvailable, setIsAvailable] = useState(false)
	const [activeSkill, setActiveSkill] = useState('all')
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		window.localStorage.setItem('USERS_DATA', JSON.stringify(users))
	}, [users])

	const handleDeleteUser = id => {
		setUsers(prev => prev.filter(user => user.id !== id))
	}
	const handleSetSearch = e => {
		setSearchStr(e.target.value)
	}

	const handleChangeAvailable = () => {
		setIsAvailable(!isAvailable)
	}

	const handleChangeActiveSkill = activeSkill => {
		setActiveSkill(activeSkill)
	}
	const handleToggleModal = () => {
		setIsOpenModal(!isOpenModal)
	}
	const handleClickReadMore = user => {
		console.log(user)
		setCurrentUser(user)
		setIsOpenModal(true)
	}

	const getFilteredData = () => {
		return users
			.filter(
				user =>
					user.name.toLowerCase().includes(searchStr.toLowerCase()) ||
					user.email.toLowerCase().includes(searchStr.toLowerCase())
			)
			.filter(user => (isAvailable === false ? user : user.isOpenToWork))
			.filter(user => (activeSkill === 'all' ? user : user.skills.includes(activeSkill)))
	}
	const filteredUsers = getFilteredData()

	return (
		<>
			<EmployeesFilter
				isAvailable={isAvailable}
				onCheckboxClick={handleChangeAvailable}
				searchStr={searchStr}
				onChangeSearch={handleSetSearch}
				activeSkill={activeSkill}
				onChangeActiveSkill={handleChangeActiveSkill}
			/>
			<button onClick={handleToggleModal}>Open MODAL</button>
			<EmployeeList handleClickReadMore={handleClickReadMore} users={filteredUsers} onDeleteUser={handleDeleteUser} />
			{isOpenModal ? (
				<Modal title={currentUser.name} closeModal={handleToggleModal}>
					<div>
						<img
							src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
							alt='avatar'
							width={100}
							height={100}
						/>
						<h2>Name: {currentUser.name}</h2>
						<h2>Bio: {currentUser.bio}</h2>
						<h3>{currentUser.isOpenToWork ? 'Готовий працювати ' : 'Відпочиває'}</h3>
					</div>
				</Modal>
			) : null}
		</>
	)
}
