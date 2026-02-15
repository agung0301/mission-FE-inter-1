import React from 'react';
import './footer.css';
import logo from '../../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="CHILL" />
          </div>
          <p className="copyright">&copy;2023 Chill All Rights Reserved.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Genre</h4>
            <ul>
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="empty-header">&nbsp;</h4>
            <ul>
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>KDrama</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="empty-header">&nbsp;</h4>
            <ul>
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
              <li>Romantis</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="empty-header">&nbsp;</h4>
            <ul>
              <li>Sains & Alam</li>
              <li>Thriller</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Bantuan</h4>
            <ul>
              <li>FAQ</li>
              <li>Kontak Kami</li>
              <li>Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;