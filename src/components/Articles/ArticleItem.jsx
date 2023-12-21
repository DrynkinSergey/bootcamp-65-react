import React from 'react'

export const ArticleItem = () => {
	return (
		<div className='w-[90%] mt-2 mx-auto p-4 border-2 border-black rounded-md shadow-md'>
			<h2 className='text-4xl font-bold'>Article title</h2>
			<p className='italic'>article author</p>
			<p className=' '>article tags</p>
			<p className='font-light'>article time</p>
			<p className='text-xl'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, accusamus culpa ex ipsum inventore laboriosam
				cumque modi, nobis harum, assumenda expedita. Nam beatae ut placeat doloribus delectus laborum veniam dolorum!
				Asperiores, sed assumenda alias exercitationem esse reprehenderit unde est nostrum modi consectetur delectus
				possimus fuga suscipit, hic harum eos expedita, libero sit dolorem. Molestias illum quam possimus? Provident,
				pariatur quo! Ex sit minima debitis possimus? Asperiores et in dolores exercitationem omnis debitis molestiae.
				Tenetur reprehenderit sapiente soluta deserunt doloribus assumenda cumque explicabo nihil alias asperiores cum,
				nostrum esse reiciendis vitae? Sit dolor adipisci sed, ipsa distinctio perspiciatis nisi cum odit pariatur
				accusantium dolore. Voluptatem, nihil alias? Architecto saepe fugiat culpa dicta cum consequuntur sapiente autem
				error, reiciendis non ex. Ullam.
			</p>
			<div className='flex gap-4 py-2 mt-4 justify-end'>
				<button className='border-2 border-black rounded-md px-4 py-1 shadow-md'>edit</button>
				<button className='border-2 border-black rounded-md px-4 py-1 shadow-md'>delete</button>
				<button className='border-2 border-black rounded-md px-4 py-1 shadow-md'>read more</button>
			</div>
		</div>
	)
}
