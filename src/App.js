import './App.css'
import { useEffect, useState } from 'react'

function App() {
	const [popular, setPopular] = useState([])

	useEffect(() => {
		fetchPopularMovies()
	}, [])

	const fetchPopularMovies = async () => {
		const url =
			'https://api.themoviedb.org/3/movie/popular?api_key=1fe844e090d2aab7a7976a3cbfa5d31b&language=en-US&page=1'

		const data = await fetch(url)
		const movies = await data.json()
		setPopular(movies.results)
	}

	return (
		<div className='App'>
			<h1>Movies</h1>
		</div>
	)
}

export default App
