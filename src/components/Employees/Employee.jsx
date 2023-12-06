import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React from 'react'
import Modal from '../Modal/Modal'

export class Employee extends React.Component {
	state = {
		users: userData,
		searchStr: '',
		isAvailable: false,
		activeSkill: 'all',
		isOpenModal: false,
		currentUser: null,
	}

	componentDidMount() {
		const users = JSON.parse(window.localStorage.getItem('USERS_DATA'))
		// console.log(users)

		if (users?.length) {
			// console.log('Дані завантажено!')
			this.setState({ users })
			// alert(`Підгружено ${users.length} елементів!`)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.users.length !== this.state.users.length) {
			window.localStorage.setItem('USERS_DATA', JSON.stringify(this.state.users))
		}
	}

	handleDeleteUser = id => {
		// console.log(id)
		this.setState(prevState => ({ users: prevState.users.filter(user => user.id !== id) }))
	}
	handleSetSearch = e => {
		// console.log(e.target.value)
		this.setState({ searchStr: e.target.value })
	}

	handleChangeAvailable = () => {
		this.setState(prevState => ({ isAvailable: !prevState.isAvailable }))
	}

	// handleChangeActiveSkill = e => {
	// 	// console.log(skill)
	// 	this.setState({ activeSkill: e.target.value })
	// }

	handleChangeActiveSkill = activeSkill => {
		// console.log(skill)
		this.setState({ activeSkill })
	}
	handleToggleModal = () => {
		this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }))
	}
	handleClickReadMore = user => {
		console.log(user)
		this.setState({ currentUser: user, isOpenModal: true })
	}

	getFilteredData = () => {
		return this.state.users
			.filter(
				user =>
					user.name.toLowerCase().includes(this.state.searchStr.toLowerCase()) ||
					user.email.toLowerCase().includes(this.state.searchStr.toLowerCase())
			)
			.filter(user => (this.state.isAvailable === false ? user : user.isOpenToWork))
			.filter(user => (this.state.activeSkill === 'all' ? user : user.skills.includes(this.state.activeSkill)))
	}

	render() {
		const { users, searchStr, isAvailable, activeSkill, isOpenModal, currentUser } = this.state
		const filteredUsers = this.getFilteredData()
		return (
			<>
				<EmployeesFilter
					isAvailable={isAvailable}
					onCheckboxClick={this.handleChangeAvailable}
					searchStr={searchStr}
					onChangeSearch={this.handleSetSearch}
					activeSkill={activeSkill}
					onChangeActiveSkill={this.handleChangeActiveSkill}
				/>
				<button onClick={this.handleToggleModal}>Open MODAL</button>
				<EmployeeList
					handleClickReadMore={this.handleClickReadMore}
					users={filteredUsers}
					onDeleteUser={this.handleDeleteUser}
				/>
				{isOpenModal ? (
					<Modal title={currentUser.name} closeModal={this.handleToggleModal}>
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
}

// export const Employee = () => {
// 	return (
// 		<>
// 			<EmployeesFilter />
// 			<EmployeeList users={userData} />
// 		</>
// 	)
// }
