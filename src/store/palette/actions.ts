import { CellType } from 'config/constants';

import { PaletteAction, SELECT_TYPE } from './types';

export const selectCellType = (cellType: CellType): PaletteAction => ({
  type: SELECT_TYPE,
  cellType
});
