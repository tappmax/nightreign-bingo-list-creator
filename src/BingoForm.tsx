import React, { useState } from 'react';
import type { MapType } from './types';

interface BingoFormProps {
  onGenerate: (form: {
    mapType: string;
    nightlord: string;
    nightfarer: string;
  }) => void;
}

const BingoForm: React.FC<BingoFormProps> = ({ onGenerate }) => {
  const [mapType, setMapType] = useState<MapType>('snow');
  const [nightlord, setNightlord] = useState('dogs');
  const [nightfarer, setNightfarer] = useState('recluse');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ mapType, nightlord, nightfarer });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Map Type:
        <select value={mapType} onChange={(e) => setMapType(e.target.value as MapType)}>
          <option value="snow">Snow</option>
          <option value="rot">Rot</option>
          <option value="castle">Castle</option>
          <option value="common">Common</option>
        </select>
      </label>

      <label>
        Nightlord:
        <select value={nightlord} onChange={(e) => setNightlord(e.target.value)}>
          <option value="dogs">Dogs</option>
          <option value="bugs">Bugs</option>
          <option value="horse">Horse</option>
        </select>
      </label>

      <label>
        Nightfarer:
        <select value={nightfarer} onChange={(e) => setNightfarer(e.target.value)}>
          <option value="recluse">Recluse</option>
          <option value="raider">Raider</option>
          <option value="duchess">Duchess</option>
        </select>
      </label>

      <button type="submit">Generate Bingo Board</button>
    </form>
  );
};

export default BingoForm;
