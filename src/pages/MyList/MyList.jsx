import React, { useState } from 'react';
import MovieCardPortrait from '../../components/molecules/MovieCardPotrait/MovieCardPotrait';
import MovieModal from '../../components/organisms/MovieModal/MovieModal';
import './myList.css';
import Footer from '../../components/organisms/Footer/Footer';
import Navbar from '../../components/molecules/Navbar/Navbar';
import { allContents } from '../../data/content.js';

const MyList = ({ data, onRemove, onToggleFavorite }) => {
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

    const myListData = (data).map((movie) => {
        return {
            ...movie,
            image: movie.posterImg,
            imageLandscape: movie.landscapeImg
        };
    });
    return (
        <div className="my-list-page">
            <Navbar />
            <div className="my-list-container">
                <h1 className="my-list-header">Daftar Saya</h1>

                {myListData.length > 0 ? (
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
                ) : (
                    <div style={{ textAlign: 'center', marginTop: '50px', color: 'gray' }}>
                        <p>Belum ada daftar film yang ditambahkan.</p>
                    </div>
                )}
            </div>

            {isModalOpen && (
                <MovieModal
                    item={data.find(m => m.id === selectedMovie?.id) || selectedMovie}
                    onClose={handleCloseModal}
                    onRemove={onRemove}
                    isMyListPage={true}
                    recommendations={allContents}
                    onToggleFavorite={onToggleFavorite}
                />
            )}

            <Footer />
        </div>
    );
};

export default MyList;