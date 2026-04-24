import * as migration_20260424_143259_initial from './20260424_143259_initial';

export const migrations = [
  {
    up: migration_20260424_143259_initial.up,
    down: migration_20260424_143259_initial.down,
    name: '20260424_143259_initial'
  },
];
