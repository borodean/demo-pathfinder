import { Obstacle } from 'config/constants';

import { PaletteAction, SELECT_TYPE } from './types';

export const selectCellType = (cellType: Obstacle): PaletteAction => ({
  type: SELECT_TYPE,
  cellType
});
