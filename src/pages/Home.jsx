import { useState } from 'react';
import Navbar from '../components/molecules/Navbar/Navbar';
import Hero from '../components/organisms/Hero/Hero';
import ContinueWatching from '../components/organisms/ContinueWatching/ContinueWatching.jsx';
import TopRatingList from '../components/organisms/TopRatingList/TopRatingList.jsx';
import TrendingList from '../components/organisms/TrendingList/TrendingList.jsx';
import NewReleaseList from '../components/organisms/NewReleaseList/NewReleaseList.jsx';
import Footer from '../components/organisms/Footer/Footer.jsx';
import MovieModal from '../components/organisms/MovieModal/MovieModal.jsx';

import { allContents } from '../data/content.js';

const Home = ({ onAdd }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div style={{ backgroundColor: '#181A1C', minHeight: '100vh' }}>
      <Navbar />
      <Hero />

      <ContinueWatching onOpenModal={handleOpenModal} />
      <TopRatingList onOpenModal={handleOpenModal} />
      <TrendingList onOpenModal={handleOpenModal} />
      <NewReleaseList onOpenModal={handleOpenModal} />

      <Footer />

      {isModalOpen && (
        <MovieModal
          item={selectedMovie}
          onClose={handleCloseModal}
          onAdd={(id) => {
            onAdd(id);
            handleCloseModal();
          }}
          onRemove={() => { }}
          isMyListPage={false}
          recommendations={allContents}
        />
      )}
    </div>
  );
};

export default Home;