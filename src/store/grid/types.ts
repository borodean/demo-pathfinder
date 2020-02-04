import { Action } from 'redux';

export interface GridState {}

export const UPDATE_CELL = 'UPDATE_CELL';

interface UpdateCellAction extends Action {
  type: typeof UPDATE_CELL;
}

export type GridAction = UpdateCellAction;
