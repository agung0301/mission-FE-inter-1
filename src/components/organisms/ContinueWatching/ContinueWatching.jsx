import React, { useRef } from 'react';
import './ContinueWatching.css';
import MovieCard from '../../molecules/MovieCard/MovieCard.jsx';
import { allContents } from '../../../data/content.js';

const ContinueWatching = ({ onOpenModal }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const continueWatchingList = [
    { id: 20, progress: 85 },
    { id: 8, progress: 40 },
    { id: 5, progress: 65, epIndex: 4 },
    { id: 23, progress: 50, epIndex: 0 },
    { id: 10, progress: 25 },
    { id: 4, progress: 15 },
    { id: 19, progress: 70 },
    { id: 27, progress: 10 }
  ];

  return (
    <div className="continue-watching-section">
      <h2 className="section-title">Melanjutkan Tontonan Film</h2>
      <div className="scroll-wrapper">
        <button className="nav-btn left" onClick={() => scroll('left')}>‹</button>
        <div className="movie-list-scroll" ref={scrollRef}>
          {continueWatchingList.map((watchItem) => {
            const content = allContents.find(c => c.id === watchItem.id);

            if (!content) return null;

            let displayEpisode = content.title;
            if (content.type === "series" && content.episodes) {
              const index = watchItem.epIndex || 0;
              displayEpisode = content.episodes[index]?.title || content.episodes[0].title;
            }

            const combinedData = {
              ...content,
              image: content.landscapeImg,
              progress: watchItem.progress,
              episodeTitle: displayEpisode
            };

            return (
              <MovieCard
                key={content.id}
                item={combinedData}
                variant="landscape"
                onOpenModal={() => onOpenModal(combinedData)}
              />
            );
          })}
        </div>
        <button className="nav-btn right" onClick={() => scroll('right')}>›</button>
      </div>
    </div>
  );
};

export default ContinueWatching;