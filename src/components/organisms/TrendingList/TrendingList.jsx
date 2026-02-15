import React, { useRef } from 'react';
import MovieCardPortrait from '../../molecules/MovieCardPotrait/MovieCardPotrait.jsx';
import './TrendingList.css';
import { allContents } from '../../../data/content.js';

const TrendingList = ({ onOpenModal }) => {
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

  const trendingIds = [2, 10, 3, 16, 30, 7, 12, 15];

  const trendingData = trendingIds.map((id) => {
    const movie = allContents.find(m => m.id === id);
    return {
      ...movie,
      image: movie.posterImg,
      imageLandscape: movie.landscapeImg
    };
  });

  return (
    <section className="trending-section">
      <h2 className="trending-title">Film Trending</h2>
      <div className="trending-wrapper">
        <button className="nav-btn left" onClick={() => scroll('left')}>‹</button>
        <div className="trending-scroll-container" ref={scrollRef}>
          {trendingData.map((movie) => (
            <MovieCardPortrait
              key={movie.id}
              item={movie}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
        <button className="nav-btn right" onClick={() => scroll('right')}>›</button>
      </div>
    </section>
  );
};

export default TrendingList;