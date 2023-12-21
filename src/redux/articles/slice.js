import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [
		{
			id: '1',
			title: 'Redux toolkit',
			description:
				'	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, accusamus culpa ex ipsum inventore laboriosam  cumque modi, nobis harum, assumenda expedita. Nam beatae ut placeat doloribus delectus laborum veniam dolorum  Asperiores, sed assumenda alias exercitationem esse reprehenderit unde est nostrum modi consectetur delectus  possimus fuga suscipit, hic harum eos expedita, libero sit dolorem. Molestias illum quam possimus? Provident,  pariatur quo! Ex sit minima debitis possimus? Asperiores et in dolores exercitationem omnis debitis molestiae.  Tenetur reprehenderit sapiente soluta deserunt doloribus assumenda cumque explicabo nihil alias asperiores cum,  nostrum esse reiciendis vitae? Sit dolor adipisci sed, ipsa distinctio perspiciatis nisi cum odit pariatur  accusantium dolore. Voluptatem, nihil alias? Architecto saepe fugiat culpa dicta cum consequuntur sapiente autem  error, reiciendis non ex. Ullam.',
			author: 'Alex Dou',
			createdAt: '21.12.2023',
			tags: ['redux', 'react', 'js'],
		},
		{
			id: '2',
			title: 'React guide',
			description:
				'	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, accusamus culpa ex ipsum inventore laboriosam  cumque modi, nobis harum, assumenda expedita. Nam beatae ut placeat doloribus delectus laborum veniam dolorum  Asperiores, sed assumenda alias exercitationem esse reprehenderit unde est nostrum modi consectetur delectus  possimus fuga suscipit, hic harum eos expedita, libero sit dolorem. Molestias illum quam possimus? Provident,  pariatur quo! Ex sit minima debitis possimus? Asperiores et in dolores exercitationem omnis debitis molestiae.  Tenetur reprehenderit sapiente soluta deserunt doloribus assumenda cumque explicabo nihil alias asperiores cum,  nostrum esse reiciendis vitae? Sit dolor adipisci sed, ipsa distinctio perspiciatis nisi cum odit pariatur  accusantium dolore. Voluptatem, nihil alias? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, accusamus culpa ex ipsum inventore laboriosam  cumque modi, nobis harum, assumenda expedita. Nam beatae ut placeat doloribus delectus laborum veniam dolorum  Asperiores, sed assumenda alias exercitationem esse reprehenderit unde est nostrum modi consectetur delectus  possimus fuga suscipit, hic harum eos expedita, libero sit dolorem. Molestias illum quam possimus? Provident,  pariatur quo! Ex sit minima debitis possimus? Asperiores et in dolores exercitationem omnis debitis molestiae.  Tenetur reprehenderit sapiente soluta deserunt doloribus assumenda cumque explicabo nihil alias asperiores cum,  nostrum esse reiciendis vitae? Sit dolor adipisci sed, ipsa distinctio perspiciatis nisi cum odit pariatur  accusantium dolore. Voluptatem, nihil alias?Architecto saepe fugiat culpa dicta cum consequuntur sapiente autem  error, reiciendis non ex. Ullam.',
			author: 'Petro Dou',
			createdAt: '23.11.2021',
			tags: ['react', 'js'],
		},
	],
	loading: false,
	error: null,
}

const slice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		addArticle: (state, { payload }) => {
			state.items.push(payload)
		},
	},
})

export const articleReducer = slice.reducer
export const { addArticle } = slice.actions
