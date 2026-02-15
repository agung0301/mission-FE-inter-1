import React from 'react';
import './EpisodeCard.css';
import PlayLogo from '../../../assets/icons/play.svg';

const EpisodeCard = ({ index, title, duration, description, thumbnail }) => {
  return (
    <div className="episode-card">
      <div className="ep-number">{index}</div>
      <div className="ep-thumbnail-container">
        <img src={thumbnail} alt={title} className="ep-img" />
        {console.log("Path yang diterima prop:", thumbnail)}
        <div className="ep-play-overlay"><img src={PlayLogo} alt="play" /></div>
      </div>
      <div className="ep-main-content">
        <div className="ep-header">
          <h4 className="ep-title">{title}</h4>
          <span className="ep-duration">{duration}</span>
        </div>
        <p className="ep-desc">{description}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;