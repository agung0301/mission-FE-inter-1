import React, { useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import './MovieCardPotrait.css';
import Badge from '../../atoms/Badge/Badge';
import PlayLogo from '../../../assets/icons/play.svg';
import CheckLogo from '../../../assets/icons/check.svg';
import ExpandLogo from '../../../assets/icons/expand.svg';

const MovieCardPortrait = ({ item, onOpenModal, isMyListPage }) => {
  const { image, imageLandscape, title, ageRating, duration, genres } = item;
  const cardRef = useRef(null);

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(cardRef.current.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map((el) => {
      return new Tooltip(el, {
        trigger: 'hover',
        container: 'body',
        boundary: 'viewport'
      });
    });

    return () => {
      tooltipList.forEach(t => t.dispose());
    };
  }, [item, isMyListPage]);

  return (
    <div ref={cardRef} className="movie-card-potrait" onClick={() => onOpenModal(item)} style={{ cursor: 'pointer' }}>
      <div className="potrait-image-wrapper">
        <img src={image} alt={title} className="potrait-img" />
        <img src={imageLandscape} alt={title} className="landscape-img" />

        <div className="trending-details">
          <div className="action-buttons">
            <div className="left-btns">
              <button
                className="play-btn"
                onClick={(e) => e.stopPropagation()}
                data-bs-toggle="tooltip"
                title="Putar"
              >
                <img src={PlayLogo} alt="Play" />
              </button>
              <button
                className="check-btn"
                onClick={(e) => e.stopPropagation()}
                data-bs-toggle="tooltip"
                key={isMyListPage ? "hapus" : "tambah"}
                title={isMyListPage ? "Hapus dari Daftar" : "Tambah ke Daftar"}
              >
                {isMyListPage ? (
                  <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', display: 'block', lineHeight: '1' }}>✕</span>
                ) : (
                  <img src={CheckLogo} alt="Check" />
                )}
              </button>
            </div>

            <button
              className="expand-btn"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(item);
              }}
              data-bs-toggle="tooltip"
              title="Detail"
            >
              <img src={ExpandLogo} alt="expand" />
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
      <div className="potrait-movie-title">{title}</div>
    </div>
  );
};

export default MovieCardPortrait;