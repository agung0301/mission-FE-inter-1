import React, { useState } from 'react';
import './ActionGroup.css';
import CheckLogo from '../../../assets/icons/check.svg';
import volumeOff from '../../../assets/icons/volume-off.svg';
import volumeOn from '../../../assets/icons/volume.svg';

const ActionGroup = ({ isMyListPage }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="action-group">
      <button className="btn-mulai">Mulai</button>

      <div
        className="tooltip-container"
        data-tooltip={isMyListPage ? "Hapus dari Daftar" : "Tambahkan ke Daftar"}
      >
        <button className="btn-modal-check">
          {isMyListPage ? (
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>✕</span>
          ) : (
            <img src={CheckLogo} alt="checklogo" />
          )}
        </button>
      </div>

      <div className="spacer" />

      <div className="tooltip-container" data-tooltip={isMuted ? "Bunyikan" : "Senyap"}>
        <button className="btn-mute-toggle" onClick={() => setIsMuted(!isMuted)}>
          <img src={isMuted ? volumeOff : volumeOn} className="btn-icon-white" alt="volume toggle" />
        </button>
      </div>
    </div>
  );
};

export default ActionGroup;