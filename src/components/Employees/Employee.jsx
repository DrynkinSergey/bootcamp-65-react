import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'

export const Employee = () => {
	return (
		<>
			<EmployeesFilter />
			<EmployeeList users={userData} />
		</>
	)
}
