export type Category = 'common' | 'character-specific' | 'map-specific';
export type Nightfarer = 'recluse' | 'raider' | 'duchess';
export type MapType = 'snow' | 'rot' | 'castle' | 'common' | 'lava';

export interface Square {
  description: string;
  category: Category;
  nightfarerSpecific?: Nightfarer;
  mapSpecific?: MapType
}
