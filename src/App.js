import './App.css'
import { useEffect, useState } from 'react'
import Movie from './Movie'
import Filter from './Filter'
import { motion, AnimatePresence } from 'framer-motion'

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
		<div>
			<Filter
				popularMovies={popularMovies}
				setFilteredMovies={setFilteredMovies}
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}
			/>
			<motion.div layout className='popular-movies'>
				{filteredMovies.map((movie) => {
					return (
						<AnimatePresence>
							<Movie key={movie.id} movie={movie} />
						</AnimatePresence>
					)
				})}
			</motion.div>
		</div>
	)
}

export default App
