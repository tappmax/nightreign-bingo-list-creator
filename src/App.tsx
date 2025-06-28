import React, { useState } from 'react';
import { squares as allSquares } from './data';
import BingoBoard from './BingoBoard';
import BingoForm from './BingoForm';
import type { ShiftingEarth, Nightfarer } from './types';

const App: React.FC = () => {
  const [boardSquares, setBoardSquares] = useState<string[]>([]);
  const [eligibleSquares, setEligibleSquares] = useState<string[]>([]);

  const generateBoard = ({
    mapType,
    nightfarer,
  }: {
    mapType: ShiftingEarth;
    // nightlord: string;
    nightfarer: Nightfarer;
  }) => {  
    // 1. Filter other eligible squares
    const eligible = allSquares.filter(
      (sq) =>
        sq.category === 'common' ||
        (sq.compatableWith?.length &&
          (sq.compatableWith.some(x => (x as Nightfarer) === nightfarer) || 
          sq.compatableWith.some(x => (x as ShiftingEarth) === mapType))
        )
    ).map(sq => {
      let description = sq.description;
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
      <h1>Nightreign bingo square list generator</h1>
      <BingoForm onGenerate={generateBoard} />
      <BingoBoard squares={boardSquares} />
      <h3>List of eligible squares</h3>
      <textarea rows={25} cols={90} value={
          eligibleSquares && eligibleSquares.map(x => (
              `\n"name": "${x}"`
            )
          )
        } />
        <br />
      <button className="mt10" onClick={exportBoardAsJson}>Download eligible squares JSON</button>
 </div>
  );
};

export default App;
