import React, { useState } from 'react';
import './actionGroup.css';
import CheckLogo from '../../../assets/icons/check.svg';
import volumeOff from '../../../assets/icons/volume-off.svg';
import volumeOn from '../../../assets/icons/volume.svg';
import fav from '../../../assets/icons/heart.svg';
import favFill from '../../../assets/icons/heart-fill.svg';

const ActionGroup = ({ isMyListPage, onAdd, onRemove, item, onToggleFavorite }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="action-group">
      <button className="btn-mulai">Mulai</button>

      <div
        className="tooltip-container"
        data-tooltip={isMyListPage ? "Hapus dari Daftar Saya" : "Tambah ke Daftar Saya"}
      >
        <button
          className="btn-modal-check"
          onClick={() => isMyListPage ? onRemove(item.id) : onAdd(item)}
        >
          {isMyListPage ? (
            <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>✕</span>
          ) : (
            <img src={CheckLogo} alt="checklogo" />
          )}
        </button>
      </div>
      {isMyListPage && (
        <div
          className="tooltip-container"
          data-tooltip={item.isFavorite ? "Favorit Saya" : "Tandai Sebagai Favorit"}
        >
          <button
            className="btn-modal-fav"
            onClick={() => onToggleFavorite(item.id)}
          >
            {item.isFavorite ? (
              <img src={favFill} alt="fav-Fill-logo" />
            ) : (
              <img src={fav} alt="favlogo" />
            )}
          </button>
        </div>
      )}

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