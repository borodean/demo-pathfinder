import { Action } from 'redux';

import { CellType } from 'config/constants';

export interface GridState {
  columns: ReadonlyArray<ReadonlyArray<CellType>>;
}

export const UPDATE_CELL = 'UPDATE_CELL';

interface UpdateCellAction extends Action {
  type: typeof UPDATE_CELL;
}

export type GridAction = UpdateCellAction;
