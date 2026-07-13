import MovieCard from "./MovieCard"


export default function MovieGrid({ movies, emptyText = '결과가 없습니다.' }) {
  if(!movies || movies.length === 0){
    return <p className="muted center">{emptyText}</p>
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}