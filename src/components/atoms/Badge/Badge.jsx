import React from 'react';
import './Badge.css';

const Badge = ({ text, variant = 'new' }) => {
  return (
    <span className={`badge-atom badge-${variant}`}>
      {text}
    </span>
  );
};

export default Badge;