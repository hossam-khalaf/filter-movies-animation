import { useEffect } from 'react'

const Filter = ({
	activeGenre,
	setActiveGenre,
	popularMovies,
	setFilteredMovies,
}) => {
	// run this function every time active genre changed AKA press button
	useEffect(() => {
		if (activeGenre === 0) {
			setFilteredMovies(popularMovies)
			return
		}
		const filtered = popularMovies.filter((movie) =>
			movie.genre_ids.includes(activeGenre)
		)
		setFilteredMovies(filtered)
	}, [activeGenre, popularMovies, setFilteredMovies])

	return (
		<div className='filter-container'>
			<button
				className={activeGenre === 0 ? 'active' : ''}
				onClick={() => setActiveGenre(0)}>
				All
			</button>
			{/* 35 is id of comedy genre => from the API */}
			<button
				className={activeGenre === 35 ? 'active' : ''}
				onClick={() => setActiveGenre(35)}>
				Comedy
			</button>
			{/* 28 is id of action genre => from the API */}
			<button
				className={activeGenre === 28 ? 'active' : ''}
				onClick={() => setActiveGenre(28)}>
				Action
			</button>
		</div>
	)
}

export default Filter
