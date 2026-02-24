import React, { useEffect } from 'react';
import { Tooltip } from 'bootstrap';
import './movieCard.css';
import ProgresBar from '../../atoms/ProgresBar/ProgresBar.jsx';
import PlayLogo from '../../../assets/icons/play.svg';
import CheckLogo from '../../../assets/icons/check.svg';
import ExpandLogo from '../../../assets/icons/expand.svg';
import StarLogo from '../../../assets/icons/star.svg';

const MovieCard = ({ item, onOpenModal, onAdd }) => {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(el => new Tooltip(el));

        return () => {
            tooltipList.forEach(t => t.dispose());
        };
    }, [item.id]);

    return (
        <div
            className="movie-card-container"
            onClick={() => onOpenModal(item)}
            style={{ cursor: 'pointer' }}
        >
            <div className="movie-card-main">
                <div className="poster-section">
                    <img src={item.image} alt={item.title} className="movie-img" />
                    <div className="card-overlay-info">
                        <span className="movie-title">{item.title}</span>
                        <span className="movie-rating">
                            <img src={StarLogo} alt="star" className='star' />
                            {item.rating}/5.0
                        </span>
                    </div>
                    {item.progress > 0 && (
                        <div className="card-progress-position">
                            <ProgresBar percentage={item.progress} />
                        </div>
                    )}
                </div>

                <div className="hover-details">
                    <div className="action-buttons">
                        <div className="left-actions">
                            <button
                                className="btn-play"
                                onClick={(e) => e.stopPropagation()}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Putar"
                            >
                                <img src={PlayLogo} alt="play" />
                            </button>

                            <button
                                className="btn-check"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onAdd(item);
                                }}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Tambah ke Daftar Saya"

                            >
                                <img src={CheckLogo} alt="check" />
                            </button>
                        </div>

                        <button
                            className="btn-expand"
                            onClick={(e) => {
                                e.stopPropagation();
                                onOpenModal(item);
                            }}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Detail"
                        >
                            <img src={ExpandLogo} alt="expand" />
                        </button>
                    </div>

                    <h4 className="episode-label">
                        {item.type === "series" ? `"${item.episodeTitle || "Lanjutkan Menonton"}"` : item.title}
                    </h4>

                    <div className="progress-row">
                        <div className="bar-wrapper">
                            <ProgresBar percentage={item.progress || 0} />
                        </div>
                        <span className="time-remaining">{item.duration}</span>
                    </div>

                    <div className="genre-list">
                        {item.genres && item.genres.map((genre, index) => (
                            <React.Fragment key={index}>
                                <span>{genre}</span>
                                {index < item.genres.length - 1 && <span className="separator">•</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
