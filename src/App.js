import './App.css'
import { useEffect, useState } from 'react'
import Movie from './Movie'

function App() {
	const [popularMovies, setPopularMovies] = useState([])

	useEffect(() => {
		fetchPopularMovies()
	}, [])

	const fetchPopularMovies = async () => {
		const url =
			'https://api.themoviedb.org/3/movie/popular?api_key=1fe844e090d2aab7a7976a3cbfa5d31b&language=en-US&page=1'

		const data = await fetch(url)
		const movies = await data.json()
		setPopularMovies(movies.results)
	}

	return (
		<div className='App'>
			<div className='popular-movies'>
				{popularMovies.map((movie) => {
					return <Movie key={movie.id} movie={movie} />
				})}
			</div>
		</div>
	)
}

export default App
