import React, { useState } from 'react';
import { squares as allSquares } from './data';
import BingoBoard from './BingoBoard';
import BingoForm from './BingoForm';

const App: React.FC = () => {
  const [boardSquares, setBoardSquares] = useState<string[]>([]);
  const [eligibleSquares, setEligibleSquares] = useState<string[]>([]);

  const generateBoard = ({
    mapType,
    nightfarer,
  }: {
    mapType: string;
    nightlord: string;
    nightfarer: string;
  }) => {  
    // 1. Filter other eligible squares
    const eligible = allSquares.filter(
      (sq) =>
        sq.category === 'common' ||
        (sq.category === 'character-specific' &&
          sq.nightfarerSpecific === nightfarer) || 
          (sq.category === 'map-specific' &&
          sq.mapSpecific === mapType)
    ).map(sq => {
      let description = sq.description;
      if (sq.nightfarerSpecific) {
        description += ' as ' + sq.nightfarerSpecific;
      }
      if (sq.mapSpecific) {
        description += ' in the ' + sq.mapSpecific + ' place';
      }
      return description
    });
  
    // 2. Shuffle eligible squares
    const shuffled = [...eligible].sort(() => 0.5 - Math.random());
  
    // 3. Build board with nightlord always in center
    const board = shuffled.slice(0, 24); // we need 25 other squares besides the center
  
    // 4. Insert nightlord square in the center (index 12)
    board.splice(12, 0, 'Defeat the Nightlord');
  
    setBoardSquares(board);
    setEligibleSquares(eligible)
  };
  const exportBoardAsJson = () => {
    if (eligibleSquares.length === 0) {
      alert('No board generated yet!');
      return;
    }
  
    const descriptions = eligibleSquares.map(x => ({name: x}));
    const json = JSON.stringify(descriptions, null, 2);
  
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nightfarer-bingo.json';
    a.click();
  
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Nightfarer Bingo</h1>
      <BingoForm onGenerate={generateBoard} />
      <BingoBoard squares={boardSquares} />
      <button onClick={exportBoardAsJson}>Export eligible squares as JSON</button>
 </div>
  );
};

export default App;
