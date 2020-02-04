import { Action } from 'redux';

import { Obstacle } from 'config/constants';

export interface GridState {
  finish: { x: Number; y: Number };
  rows: ReadonlyArray<ReadonlyArray<Obstacle>>;
  start: { x: Number; y: Number };
}

export const UPDATE_CELL = 'UPDATE_CELL';
export const UPDATE_FINISH = 'UPDATE_FINISH';
export const UPDATE_START = 'UPDATE_START';

interface UpdateCellAction extends Action {
  type: typeof UPDATE_CELL;
  x: Number;
  y: Number;
  cellType: Obstacle;
}

interface UpdaceFinishAction extends Action {
  type: typeof UPDATE_FINISH;
  x: Number;
  y: Number;
}

interface UpdateStartAction extends Action {
  type: typeof UPDATE_START;
  x: Number;
  y: Number;
}

export type GridAction =
  | UpdateCellAction
  | UpdaceFinishAction
  | UpdateStartAction;
