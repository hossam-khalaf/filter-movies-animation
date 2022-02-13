import './App.css'
import { useEffect, useState } from 'react'
import Movie from './Movie'
import Filter from './Filter'

function App() {
	const [popularMovies, setPopularMovies] = useState([])
	const [filteredMovies, setFilteredMovies] = useState([])
	const [activeGenre, setActiveGenre] = useState(0)

	useEffect(() => {
		fetchPopularMovies()
	}, [])

	const fetchPopularMovies = async () => {
		const url =
			'https://api.themoviedb.org/3/movie/popular?api_key=1fe844e090d2aab7a7976a3cbfa5d31b&language=en-US&page=1'

		const data = await fetch(url)
		const movies = await data.json()
		setPopularMovies(movies.results)
		setFilteredMovies(movies.results)
	}

	return (
		<div className='App'>
			<Filter
				popularMovies={popularMovies}
				setFilteredMovies={setFilteredMovies}
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}
			/>
			<div className='popular-movies'>
				{filteredMovies.map((movie) => {
					return <Movie key={movie.id} movie={movie} />
				})}
			</div>
		</div>
	)
}

export default App
