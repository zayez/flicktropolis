import React, { useEffect, useState } from "react"
import { StyledMovieList } from "./movies-styled"
import MovieListItem from "./movie-list-item"
import useMovie from "../../hooks/movie"
import { Movie } from "../../models/movie"

const baseImagePath = `https://image.tmdb.org/t/p/w500`

const Movies = () => {
  const { getMovies } = useMovie()
  const [movies, setMovies] = useState<Movie[]>([])

  const fetchData = async () => {
    try {
      const data = await getMovies()
      setMovies(data.results as Movie[])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <StyledMovieList>
        {movies?.map((movie, index) => (
          <MovieListItem
            key={index}
            title={movie?.original_title}
            overview={movie?.overview}
            imageUrl={`${baseImagePath}${movie?.poster_path}`}
          />
        ))}
      </StyledMovieList>
    </>
  )
}

export default Movies
