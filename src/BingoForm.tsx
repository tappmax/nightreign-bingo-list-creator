import React, { useState } from 'react';
import type { ShiftingEarth, Nightfarer } from './types';

interface BingoFormProps {
  onGenerate: (form: {
    mapType: ShiftingEarth;
    // nightlord: string;
    nightfarer: Nightfarer;
  }) => void;
}

const BingoForm: React.FC<BingoFormProps> = ({ onGenerate }) => {
  const [mapType, setMapType] = useState<ShiftingEarth>('Noklateo, The Shrouded City');
  // const [nightlord, setNightlord] = useState('dogs');
  const [nightfarer, setNightfarer] = useState<Nightfarer>('Recluse');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ mapType, nightfarer });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="mt10 displayBlock">
        <strong className="mr10">Map Type:</strong>
        <select value={mapType} onChange={(e) => setMapType(e.target.value as ShiftingEarth)}>
          <option value="Noklateo, The Shrouded City">Noklateo, The Shrouded City</option>
          <option value="The Rotted Woods">The Rotted Woods</option>
          <option value="The Mountaintop">The Mountaintop</option>
          <option value="The Crater">The Crater</option>
          <option value="The Castle">The Castle</option>
        </select>
      </label>
      <br />

      {/* <label>
        Nightlord:
        <select value={nightlord} onChange={(e) => setNightlord(e.target.value)}>
          <option value="dogs">Tricephalos</option>
          <option value="bugs">Gaping Jaw</option>
          <option value="horse">Sentient Pest</option>
          <option value="horse">Augur</option>
          <option value="horse">Equilibrious Beast</option>
          <option value="horse">Darkdrift Knight</option>
          <option value="horse">Fissure in the Fog</option>
          <option value="horse">Night Aspect</option>
        </select>
      </label> */}

      <label className="mt10 displayBlock">
        <strong className="mr10">Nightfarer:</strong>
        <select value={nightfarer} onChange={(e) => setNightfarer(e.target.value as Nightfarer)}>
          <option value="Wylder">Wylder</option>
          <option value="Guardian">Guardian</option>
          <option value="Ironeye">Ironeye</option>
          <option value="Recluse">Recluse</option>
          <option value="Raider">Raider</option>
          <option value="Duchess">Duchess</option>
          <option value="Revenant">Revenant</option>
          <option value="Executor">Executor</option>
        </select>
      </label>
      <br />
      <button className="mt10" type="submit">Generate Bingo Board/Eligible Squares</button>
    </form>
  );
};

export default BingoForm;
