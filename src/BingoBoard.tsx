import React from 'react';
import type { Square } from './types';

interface Props {
  squares: Square[];
}

const BingoBoard: React.FC<Props> = ({ squares }) => {
  return (
    <div className="bingo-board">
      {squares.map((square, index) => (
        <div key={index} className="bingo-square">
          <strong>{square.category.toUpperCase()}</strong>
          <p>{square.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BingoBoard;
