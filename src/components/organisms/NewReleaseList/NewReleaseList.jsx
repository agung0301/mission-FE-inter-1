import React, { useRef } from 'react';
import MovieCardPortrait from '../../molecules/MovieCardPotrait/MovieCardPotrait';
import './newReleaseList.css';
import { allContents } from '../../../data/content.js';

const NewReleaseList = ({ onOpenModal, onAdd }) => {
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

  const newReleaseIds = [17, 6, 21, 25, 29, 9, 18, 13];

  const newReleaseData = newReleaseIds.map((id) => {
    const movie = allContents.find(m => m.id === id);
    return {
      ...movie,
      image: movie.posterImg,
      imageLandscape: movie.landscapeImg
    };
  });

  return (
    <section className="new-release-section">
      <h2 className="new-release-title">Rilis Baru</h2>
      <div className="new-release-wrapper">
        <button className="nav-btn left" onClick={() => scroll('left')}>‹</button>
        <div className="new-release-scroll-container" ref={scrollRef}>
          {newReleaseData.map((movie) => (
            <MovieCardPortrait
              key={movie.id}
              item={movie}
              onOpenModal={onOpenModal}
              onAdd={onAdd}
              isMyListPage={false}
            />
          ))}
        </div>
        <button className="nav-btn right" onClick={() => scroll('right')}>›</button>
      </div>
    </section>
  );
};

export default NewReleaseList;