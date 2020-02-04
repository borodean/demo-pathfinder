import { Action } from 'redux';

import { CellType } from 'config/constants';

export interface PaletteState {
  currentType: CellType;
}

export const SELECT_TYPE = 'SELECT_TYPE';

interface SelectTypeAction extends Action {
  type: typeof SELECT_TYPE;
  cellType: CellType;
}

export type PaletteAction = SelectTypeAction;
