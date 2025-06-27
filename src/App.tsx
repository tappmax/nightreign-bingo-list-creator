import React, { useState } from 'react';
import type { Square } from './types';
import { squares as allSquares } from './data';
import BingoBoard from './BingoBoard';
import BingoForm from './BingoForm';

const App: React.FC = () => {
  const [boardSquares, setBoardSquares] = useState<Square[]>([]);

  const generateBoard = ({
    mapType,
    nightlord,
    nightfarer,
  }: {
    mapType: string;
    nightlord: string;
    nightfarer: string;
  }) => {
    const selected: Square[] = [];

    // 1. Pick map-type
    selected.push({
      description: `${mapType} place`,
      category: 'map-type',
    });

    // 2. Pick nightlord
    selected.push({
      description: nightlord.charAt(0).toUpperCase() + nightlord.slice(1),
      category: 'nightlord',
    });

    // 3. Filter other eligible squares
    const eligible = allSquares.filter(
      (sq) =>
        sq.category === 'common' ||
        (sq.category === 'character-specific' &&
          sq.nightfarerSpecific === nightfarer)
    );

    // Shuffle and pick the rest
    const shuffled = [...eligible].sort(() => 0.5 - Math.random());
    const board = [...selected, ...shuffled.slice(0, 23)]; // for a 5x5 bingo board

    setBoardSquares(board);
  };

  return (
    <div>
      <h1>Nightfarer Bingo</h1>
      <BingoForm onGenerate={generateBoard} />
      <BingoBoard squares={boardSquares} />
    </div>
  );
};

export default App;
