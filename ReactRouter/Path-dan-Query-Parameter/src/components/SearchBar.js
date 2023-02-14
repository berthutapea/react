import React from 'react';
import PropTypes from 'prop-types';

function MovieDetail({ title, overview, posterPath, releaseDate }) {
  return (
    <div>
      <img src={posterPath} alt={title} />
      <h2>{title}</h2>
      <p>Release date: {releaseDate}</p>
      <p>{overview}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};

export default MovieDetail;
