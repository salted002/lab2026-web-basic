import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <div className="poster">
        {hasPoster ? (
          <img src={movie.Poster} alt={`${movie.Title} 포스터`} />
        ) : (
        <div className="poster-empty">등록된 포스터가 없습니다.</div>
        )}
        
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p className="muted">{movie.Year}</p>
      </div>
    </Link>
  )
}