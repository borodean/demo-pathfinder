import { CellType } from 'config/constants';

import { GridAction, UPDATE_CELL } from './types';

export const updateCell = (
  x: Number,
  y: Number,
  cellType: CellType
): GridAction => ({
  type: UPDATE_CELL,
  x,
  y,
  cellType
});
