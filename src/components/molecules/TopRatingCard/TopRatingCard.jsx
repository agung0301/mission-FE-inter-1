import React, { useEffect } from 'react';
import { Tooltip } from 'bootstrap'; 
import RankNumber from '../../Atoms/RankNumber/RankNumber';
import './TopRatingCard.css';
import PlayLogo from '../../../assets/icons/play.svg';
import CheckLogo from '../../../assets/icons/check.svg';
import ExpandLogo from '../../../assets/icons/expand.svg';

const TopRatingCard = ({ rank, image, duration, ageRating, genres, imageLandscape, onOpenModal }) => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(el => new Tooltip(el));

    return () => {
      tooltipList.forEach(t => t.dispose());
    };
  }, []);

  return (
    <div className="top-rating-card" onClick={onOpenModal} style={{ cursor: 'pointer' }}>
      <RankNumber number={rank} />
      <div className="portrait-poster">
        <img src={image} alt="" className="img-portrait" />
        <img src={imageLandscape} alt="" className="img-landscape" />

        <div className="top-rating-details">
          <div className="action-buttons">
            <div className="left-btns">
              <button 
                className="play-btn" 
                onClick={(e) => e.stopPropagation()}
                data-bs-toggle="tooltip" 
                data-bs-placement="top" 
                title="Putar"
              >
                <img src={PlayLogo} alt="Play" />
              </button>
              <button 
                className="check-btn" 
                onClick={(e) => e.stopPropagation()}
                data-bs-toggle="tooltip" 
                data-bs-placement="top" 
                title="Tambah ke Daftar"
              >
                <img src={CheckLogo} alt="Check" />
              </button>
            </div>
            <button 
              className="expand-btn" 
              onClick={(e) => {
                e.stopPropagation(); 
                onOpenModal();
              }}
              data-bs-toggle="tooltip" 
              data-bs-placement="top" 
              title="Detail"
            >
              <img src={ExpandLogo} alt="Expand" />
            </button>
          </div>
          <div className="meta-row">
            <span className="age-badge">{ageRating}</span>
            <span className="duration-text">{duration}</span>
          </div>
          <div className="genre-list">
            {genres?.map((genre, index) => (
              <span key={index} className="genre-item">
                {genre}
                {index < genres.length - 1 && <span className="dot"> • </span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatingCard;
