import React from 'react'
import PropTypes from 'prop-types'
export const User = ({ user }) => {
	return <div>{user.name}</div>
}

User.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		bio: PropTypes.string.isRequired,
		skills: PropTypes.arrayOf(PropTypes.string).isRequired,
		isOpenToWork: PropTypes.bool.isRequired,
	}),
	// user: PropTypes.object,
}

// {
//   id: 1,
//   name: 'Leanne Graham',
//   email: 'Sincere@april.biz',
//   bio: 'Assumenda harum mollitia neque, officiis veniam repellat sapiente delectus aspernatur',
//   skills: ['react', 'vue'],
//   isOpenToWork: false,
// }
