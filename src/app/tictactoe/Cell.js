// File: Cell.js
import React from 'react';

const Cell = ({ value, onClick, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      
<p>{value}</p>
    </div>
  );
};

export default Cell;
