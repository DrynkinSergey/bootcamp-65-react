import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
export const User = ({ user }) => {
	return (
		<StyledWrapper>
			<StyledName>{user.name}</StyledName>
			<StyledEmail>{user.email}</StyledEmail>
			<StyledBio>{user.bio}</StyledBio>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 80%;
	margin: 0 auto;
	justify-content: center;
	border: 1px solid black;
	border-radius: 12px;
	padding: 10px;
	text-align: center;
`
const StyledName = styled.h2``
const StyledEmail = styled.h3``
const StyledBio = styled.p``
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
