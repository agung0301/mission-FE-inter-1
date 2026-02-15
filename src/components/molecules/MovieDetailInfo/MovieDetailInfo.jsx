import React from 'react';
import Badge from '../../atoms/Badge/Badge.jsx';
import './movieDetailInfo.css';

const MovieDetailInfo = ({ rating, episodeCount, description, cast, genres, director, duration, ageRating }) => {
  return (
    <div className="movie-detail-info">
      <div className="meta-wrapper">
        <Badge type="rating"> {rating}</Badge>
        <span className="meta-item">{duration}</span>
        {episodeCount && <span className="meta-item">{episodeCount} Episode</span>}
        <span className="badge-age-rating">{ageRating}</span>
      </div>

      <div className="detail-content-grid">
        <div className="description-column">
          <p className="description-text">{description}</p>
        </div>

        <div className="additional-info-column">
          {cast && (
            <div className="info-row">
              <span className="info-label">Cast:</span>
              <span className="info-value">{Array.isArray(cast) ? cast.join(', ') : cast}</span>
            </div>
          )}
          {genres && (
            <div className="info-row">
              <span className="info-label">Genre:</span>
              <span className="info-value">{Array.isArray(genres) ? genres.join(', ') : genres}</span>
            </div>
          )}
          {director && (
            <div className="info-row">
              <span className="info-label">Sutradara:</span>
              <span className="info-value">{director}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailInfo;