import React, { useRef } from 'react';
import TopRatingCard from '../../molecules/TopRatingCard/TopRatingCard';
import './topRatingList.css';
import { allContents } from '../../../data/content.js';

const TopRatingList = ({ onOpenModal, onAdd }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const selectedIds = [4, 23, 27, 31, 19];

  const topRatingData = selectedIds.map((id, index) => {
    const movie = allContents.find(m => m.id === id);
    return {
      ...movie,
      rank: index + 1
    };
  });

  return (
    <section className="top-rating-section">
      <h2 className="top-rating-title">Top Rating Film dan Series Hari Ini</h2>
      <div className="top-rating-wrapper">
        <button className="nav-btn left" onClick={() => scroll('left')}>‹</button>
        <div className="top-rating-scroll" ref={scrollRef}>
          {topRatingData.map((movie) => (
            <TopRatingCard
              key={movie.id}
              rank={movie.rank}
              title={movie.title}
              image={movie.posterImg}
              imageLandscape={movie.landscapeImg}
              duration={movie.duration}
              ageRating={movie.ageRating}
              genres={movie.genres}
              onOpenModal={() => onOpenModal(movie)}
              onAdd={onAdd}
              item={movie}
            />
          ))}
        </div>
        <button className="nav-btn right" onClick={() => scroll('right')}>›</button>
      </div>
    </section>
  );
};

export default TopRatingList;