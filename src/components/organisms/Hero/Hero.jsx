import React, { useState } from 'react';
import './hero.css';
import heroBg from '../../../assets/images/hero.png';
import infoLogo from '../../../assets/icons/info.svg';
import volumeOff from '../../../assets/icons/volume-off.svg';
import volumeOn from '../../../assets/icons/volume.svg';

const Hero = () => {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay d-flex align-items-end pb-4">
                <div className="container-fluid px-4 px-md-5">
                    <div className="row">
                        <div className="hero-content-wrapper container-fluid px-4 px-md-5">
                            <h1 className="hero-title">Avatar: The Way of Water</h1>
                            <p className="hero-description">Setahun setelah peristiwa pertama, Jake Sully tinggal bersama keluarga barunya di planet Pandora.
                                Namun, ancaman lama kembali muncul untuk menyelesaikan apa yang mereka mulai.
                            </p>

                            <div className="hero-actions">
                                <div className="d-flex align-items-center gap-2">
                                    <button className="btn-mulai">Mulai</button>
                                    <button className="btn-selengkapnya"><img src={infoLogo} alt="Info" className='info-icon' />Selengkapnya</button>
                                    <div className="age-badge">18+</div>
                                </div>

                                <button className="btn-mute-toggle" onClick={() => setIsMuted(!isMuted)}>
                                    <img src={isMuted ? volumeOff : volumeOn} className="btn-icon-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;