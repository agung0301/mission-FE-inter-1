import React, { useState } from 'react';
import MovieCardPortrait from '../../components/molecules/MovieCardPotrait/MovieCardPotrait';
import MovieModal from '../../components/organisms/MovieModal/MovieModal';
import './myList.css';
import Footer from '../../components/organisms/Footer/Footer';
import Navbar from '../../components/molecules/Navbar/Navbar';
import { allContents } from '../../data/content.js';

const MyList = ({ data, onRemove, onToggleFavorite, isLoading, isError }) => {
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

                {isLoading ? (
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '50vh', color: 'white' }}>
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Menyiapkan daftar tontonan Anda...</p>
                    </div>
                ) : isError ? (
                    <div className="d-flex flex-column justify-content-center align-items-center text-white" style={{ height: '50vh' }}>
                        <div className="text-danger mb-3" style={{ fontSize: '3rem' }}>
                            <i className="bi bi-exclamation-triangle"></i>
                        </div>
                        <h3>Konten Tidak Tersedia!</h3>
                        <p className="text-secondary text-center">
                            Kami mengalami kendala saat memuat daftar film Anda. <br />
                            Mohon pastikan koneksi internet Anda stabil dan coba beberapa saat lagi.
                        </p>
                        <button
                            className="btn btn-primary mt-3 px-4"
                            onClick={() => window.location.reload()}
                        >
                            Coba Lagi
                        </button>
                    </div>
                ) : (
                    <>
                        {myListData.length > 0 ? (
                            <div className="my-list-grid">
                                {myListData.map((item) => (
                                    <div key={item.id} className="grid-item">
                                        <MovieCardPortrait
                                            item={item}
                                            onOpenModal={handleOpenModal}
                                            onRemove={onRemove}
                                            isMyListPage={true}
                                            onToggleFavorite={onToggleFavorite}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', marginTop: '50px', color: 'gray' }}>
                                <p>Belum ada daftar film yang ditambahkan.</p>
                            </div>
                        )}
                    </>
                )}
            </div>

            {isModalOpen && (
                <MovieModal
                    item={data.find(m => m.id === selectedMovie?.id) || selectedMovie}
                    onClose={handleCloseModal}
                    onRemove={(id) => {
                        onRemove(id);
                        handleCloseModal();
                    }}
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