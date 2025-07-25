export type Category = 'common' | 'character-specific' | 'map-specific';
export type Nightfarer = 
  | 'Wylder'
  | 'Guardian' 
  | 'Ironeye' 
  | 'Recluse' 
  | 'Raider' 
  | 'Duchess'
  | 'Revenant' 
  | 'Executor';
export type ShiftingEarth = 
  | 'The Mountaintop' 
  | 'The Rotted Woods' 
  | 'Noklateo, The Shrouded City' 
  | 'The Castle' 
  | 'The Crater';

export interface Square {
  description: string;
  category: Category;
  compatableWith?: (Nightfarer | ShiftingEarth)[]
}
