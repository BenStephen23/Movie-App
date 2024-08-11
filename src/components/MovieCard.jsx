import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <Link to={`/movie/${id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;