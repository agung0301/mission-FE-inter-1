import React from 'react';
import './badge.css';

const Badge = ({ text, variant = 'new' }) => {
  return (
    <span className={`badge-atom badge-${variant}`}>
      {text}
    </span>
  );
};

export default Badge;