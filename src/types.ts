export type Category = 'common' | 'nightlord' | 'character-specific' | 'map-type';
export type Nightfarer = 'recluse' | 'raider' | 'duchess';

export interface Square {
  description: string;
  category: Category;
  nightfarerSpecific?: Nightfarer;
}
