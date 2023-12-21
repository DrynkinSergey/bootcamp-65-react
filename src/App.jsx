import React from 'react'
import { Articles } from './pages/Articles/Articles'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { NewArticle } from './pages/NewArticle/NewArticle'

export const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/articles' element={<Articles />} />
				<Route path='/articles/new' element={<NewArticle />} />
				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
		</div>
	)
}
