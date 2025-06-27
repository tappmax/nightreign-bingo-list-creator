import type { Square } from './types';

export const squares: Square[] = [
  // set all map specific squares here in this format
  //  rot squares
  { description: 'Don\'t get the power', category: 'map-specific', mapSpecific: 'rot' },
  //  snow squares
  { description: 'Don\'t get the power', category: 'map-specific', mapSpecific: 'snow' },
  //  castle squares
  { description: 'Defeat Astel', category: 'map-specific', mapSpecific: 'castle' },
  //  lava squares
  //  common castle squares
  { description: 'Beat bottom boss', category: 'map-specific', mapSpecific: 'common' },
  { description: 'Beat top boss', category: 'map-specific', mapSpecific: 'common' },
  { description: 'Clear castle', category: 'map-specific', mapSpecific: 'common' },
  // set all character specific squares here in this format
  //  recluse squares
  {
    description: 'beat a boss without using skill',
    category: 'character-specific',
    nightfarerSpecific: 'recluse',
  },
  //  raider squares
  {
    description: 'beat dungeon without healing',
    category: 'character-specific',
    nightfarerSpecific: 'raider',
  },
  {
    description: 'no summons boss fight',
    category: 'character-specific',
    nightfarerSpecific: 'raider',
  },
  //  duchess squares
  {
    description: 'never use flask entire area',
    category: 'character-specific',
    nightfarerSpecific: 'duchess',
  },
  {
    description: 'jump only to boss',
    category: 'character-specific',
    nightfarerSpecific: 'duchess',
  },
  //  obv. put in the rest of the classes
  // Set all common/general squares here in this format
  { description: 'eat 3 poison boluses', category: 'common' },
  { description: 'drink 2 pickled thing', category: 'common' },
  { description: 'kill 4 daggers', category: 'common' },
  { description: 'eat 1 pickled thing', category: 'common' },
  { description: 'drink 3 bolluses', category: 'common' },
  { description: 'kill 2 pickled thing', category: 'common' },
  { description: 'eat 4 daggers', category: 'common' },
  { description: 'drink 2 daggers', category: 'common' },
  { description: 'kill 1 bolluses', category: 'common' },
  { description: 'drink 1 pickled thing', category: 'common' },
  { description: 'kill 5 daggers', category: 'common' },
  { description: 'eat 2 daggers', category: 'common' },
  { description: 'drink 3 pickled thing', category: 'common' },
  { description: 'kill 3 bolluses', category: 'common' },
  { description: 'eat 5 bolluses', category: 'common' },
  { description: 'drink 4 pickled thing', category: 'common' },
  { description: 'kill 3 pickled thing', category: 'common' },
  { description: 'eat 1 daggers', category: 'common' },
  { description: 'kill 4 bolluses', category: 'common' },
  { description: 'eat 3 pickled thing', category: 'common' },
  { description: 'drink 5 bolluses', category: 'common' },
  { description: 'kill 2 daggers', category: 'common' },
  { description: 'drink 1 bolluses', category: 'common' },
  { description: 'eat 2 pickled thing', category: 'common' },
  { description: 'kill 1 daggers', category: 'common' },
  { description: 'drink 2 bolluses', category: 'common' },
  { description: 'kill 2 bolluses', category: 'common' },
  { description: 'drink 4 bolluses', category: 'common' },
  { description: 'eat 4 pickled thing', category: 'common' },
  { description: 'kill 5 bolluses', category: 'common' },
  { description: 'eat 5 pickled thing', category: 'common' },
  { description: 'drink 5 pickled thing', category: 'common' },
  { description: 'eat 3 daggers', category: 'common' },
  { description: 'kill 3 daggers', category: 'common' },
  { description: 'drink 3 daggers', category: 'common' },
  { description: 'eat 2 bolluses', category: 'common' },
  { description: 'kill 4 pickled thing', category: 'common' },
  { description: 'eat 1 bolluses', category: 'common' },
  { description: 'drink 2 pickled thing', category: 'common' },
  { description: 'kill 1 pickled thing', category: 'common' },
  
];
