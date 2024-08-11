import React from 'react'
import { movies } from '../movies'
import { useParams, useHistory } from 'react-router-dom'

const MovieDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const movie = movies.find((movie) => movie.id === parseInt(id));
  
    if (!movie) {
      return <h2>Movie not found</h2>;
    }

  return (
    <div>
        <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerUrl}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <button onClick={() => history.push('/')}>Back to Home</button>
    </div>
  )
}

export default MovieDetails