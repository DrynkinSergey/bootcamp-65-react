import React from 'react'
import s from './Employee.module.css'
const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = ({
	onCheckboxClick,
	isAvailable,
	onChangeSearch,
	searchStr,
	activeSkill,
	onChangeActiveSkill,
}) => {
	return (
		<div className={s.filtersWrapper}>
			<h1>Filters</h1>
			<button>Add user</button>
			<div className={s.flex}>
				<input className={s.input} placeholder='Enter username or email' onChange={onChangeSearch} value={searchStr} />
				<label>
					<input type='checkbox' checked={isAvailable} onChange={onCheckboxClick} />
					<span> isAvailable</span>
				</label>
			</div>
			<div className={s.flex}>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							name='radioButtonName'
							checked={radioButtonName === activeSkill}
							onChange={() => onChangeActiveSkill(radioButtonName)}
							type='radio'
							value={radioButtonName}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</div>
		</div>
	)
}
