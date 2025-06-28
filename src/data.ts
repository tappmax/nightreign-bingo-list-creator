import type { Square } from './types';

export const squares: Square[] = [
  // set all map specific squares here in this format
  //  rot squares
  { description: 'Don\'t get the power', category: 'map-specific', mapSpecific: 'The Rotted Woods' },
  //  snow squares
  { description: 'Don\'t get the power', category: 'map-specific', mapSpecific: 'The Mountaintop' },
  //  castle squares
  { description: 'Defeat Astel', category: 'map-specific', mapSpecific: 'Noklateo, The Shrouded City' },
  //  lava squares
  //  common castle squares
  { description: 'Beat bottom boss', category: 'map-specific', mapSpecific: 'The Castle' },
  { description: 'Beat top boss', category: 'map-specific', mapSpecific: 'The Castle' },
  { description: 'Clear castle', category: 'map-specific', mapSpecific: 'The Castle' },
  // set all character specific squares here in this format
  //  recluse squares
  {
    description: 'beat a boss without using skill',
    category: 'character-specific',
    nightfarerSpecific: 'Recluse',
  },
  //  raider squares
  {
    description: 'beat dungeon without healing',
    category: 'character-specific',
    nightfarerSpecific: 'Raider',
  },
  {
    description: 'no summons boss fight',
    category: 'character-specific',
    nightfarerSpecific: 'Raider',
  },
  //  duchess squares
  {
    description: 'never use flask entire area',
    category: 'character-specific',
    nightfarerSpecific: 'Duchess',
  },
  {
    description: 'jump only to boss',
    category: 'character-specific',
    nightfarerSpecific: 'Duchess',
  },
  //  put in the rest of the classes
  // Set all common/general squares here in this format. All these are just for an example.
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
