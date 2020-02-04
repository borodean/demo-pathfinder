import { Action } from 'redux';

import { CellType } from 'config/constants';

export interface GridState {
  rows: ReadonlyArray<ReadonlyArray<CellType>>;
}

export const UPDATE_CELL = 'UPDATE_CELL';

interface UpdateCellAction extends Action {
  type: typeof UPDATE_CELL;
  x: Number;
  y: Number;
  cellType: CellType;
}

export type GridAction = UpdateCellAction;
