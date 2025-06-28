import React from 'react';

interface Props {
  squares: string[];
}

const BingoBoard: React.FC<Props> = ({ squares }) => {
  return (<>
    <h3>Example Board</h3>
    <div className="bingo-board">
      {squares.map((square, index) => (
        <div key={index} className="bingo-square">
          <strong>{square}</strong>
        </div>
      ))}
    </div>
    </>);
};

export default BingoBoard;
