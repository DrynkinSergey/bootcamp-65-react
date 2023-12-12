export const initialState = {
	posts: [],
	loading: false,
	error: null,
	skip: 0,
	searchQuery: '',
	totalPosts: null,
}

export const postReducer = (state, action) => {
	console.log(action)
	switch (action.type) {
		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload,
				error: action.payload ? null : state.error,
			}
		case 'FETCH_DATA':
			return {
				...state,
				posts: [...state.posts, ...action.payload.posts],
				totalPosts: action.payload.total,
			}
		case 'SET_SKIP':
			return {
				...state,
				skip: state.skip + 4,
			}
		case 'CHANGE_QUERY':
			return {
				...state,
				searchQuery: action.payload,
				posts: [],
				skip: 0,
			}
		default:
			return state
	}
}
