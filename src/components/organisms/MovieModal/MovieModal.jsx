import React from 'react';
import './movieModal.css';
import ActionGroup from '../../atoms/ActionGroup/ActionGroup';
import EpisodeCard from '../../molecules/EpisodeCard/EpisodeCard';
import MovieDetailInfo from '../../molecules/MovieDetailInfo/MovieDetailInfo';
import StarLogo from '../../../assets/icons/star.svg';

const MovieModal = ({ item, onClose, recommendations = [], isMyListPage, onAdd,onRemove,onToggleFavorite }) => {
    if (!item) return null;

    const movie = item;

    const displayRecommendations = recommendations.filter(rec =>
        movie.recommendationIds?.includes(rec.id)
    );

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <div className="modal-header">
                    <img src={movie.landscapeImg} alt={movie.title} className="modal-banner" />
                    <div className="modal-header-overlay">
                        <h2 className="modal-title">{movie.title}</h2>
                        <ActionGroup
                            isMyListPage={isMyListPage}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            item={movie}
                            onToggleFavorite={onToggleFavorite}
                        />
                    </div>
                </div>

                <div className="modal-body">
                    <MovieDetailInfo
                        rating={movie.rating}
                        duration={movie.duration}
                        ageRating={movie.ageRating}
                        description={movie.description}
                        cast={movie.cast}
                        genres={movie.genres}
                        director={movie.director}
                    />

                    {movie.type === "series" && movie.episodes && (
                        <div className="modal-episodes-section">
                            <h3 className="section-title">Episode</h3>
                            <div className="episodes-list">
                                {movie.episodes.map((ep, index) => (
                                    <EpisodeCard
                                        key={index}
                                        index={index + 1}
                                        title={ep.title}
                                        duration={ep.duration}
                                        description={ep.description}
                                        thumbnail={ep.thumbnail}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="modal-recommendation-section">
                        <h3 className="section-title">Rekomendasi Serupa</h3>
                        <div className="recommendations-grid">
                            {displayRecommendations.length > 0 ? (
                                displayRecommendations.map((rec) => (
                                    <div key={rec.id} className="rec-card">
                                        <img src={rec.posterImg} alt={rec.title} />
                                        <div className="rec-badge">
                                            <img src={StarLogo} alt="star" /> {rec.rating}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no-data">Tidak ada rekomendasi serupa.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;