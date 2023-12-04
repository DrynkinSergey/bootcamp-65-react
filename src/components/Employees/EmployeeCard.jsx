import s from './Employee.module.css'
export const EmployeeCard = ({ id, name, email, bio, skills }) => {
	return (
		<li className={s.userCard}>
			<h3>{name}</h3>
			<h4>{email}</h4>
			<h5>{bio}</h5>
			<ul className={s.skillList}>
				{skills.map(skill => (
					<li className={s.skillLabel} $skill={skill} key={skill}>
						{skill}
					</li>
				))}
			</ul>
			<button className={s.btn} $border='2px' $size='.8rem'>
				Delete
			</button>
		</li>
	)
}
