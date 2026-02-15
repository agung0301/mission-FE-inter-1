import React, { useState } from 'react';
import MovieCardPortrait from '../../components/molecules/MovieCardPotrait/MovieCardPotrait';
import MovieModal from '../../components/organisms/MovieModal/MovieModal';
import './MyList.css';
import Footer from '../../components/organisms/Footer/Footer';
import Navbar from '../../components/molecules/Navbar/Navbar';
import { allContents } from '../../data/content.js';

const MyList = () => {
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

    const myListIds = [26, 12, 1, 7, 14, 28, 11, 24, 20, 27, 5, 32];

    const myListData = myListIds.map((id) => {
        const movie = allContents.find(m => m.id === id);
        if (!movie) return null;
        return {
            ...movie,
            image: movie.posterImg,
            imageLandscape: movie.landscapeImg
        };
    }).filter(Boolean);

    return (
        <div className="my-list-page">
            <Navbar />
            <div className="my-list-container">
                <h1 className="my-list-header">Daftar Saya</h1>
                <div className="my-list-grid">
                    {myListData.map((item) => (
                        <div key={item.id} className="grid-item">
                            <MovieCardPortrait
                                item={item}
                                onOpenModal={handleOpenModal}
                                isMyListPage={true}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <MovieModal
                    item={selectedMovie}
                    onClose={handleCloseModal}
                    isMyListPage={true}
                    recommendations={allContents}
                />
            )}

            <Footer />
        </div>
    );
};

export default MyList;