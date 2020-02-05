import { Action } from 'redux';

import { Obstacle } from 'config/constants';

export interface GridState {
  finish: { x: number; y: number };
  path: ReadonlyArray<{ x: number; y: number }> | null;
  rows: ReadonlyArray<ReadonlyArray<Obstacle>>;
  start: { x: number; y: number };
}

export const UPDATE_CELL = 'UPDATE_CELL';
export const UPDATE_FINISH = 'UPDATE_FINISH';
export const UPDATE_PATH = 'UPDATE_PATH';
export const UPDATE_START = 'UPDATE_START';

interface UpdateCellAction extends Action {
  type: typeof UPDATE_CELL;
  x: number;
  y: number;
  cellType: Obstacle;
}

interface UpdateFinishAction extends Action {
  type: typeof UPDATE_FINISH;
  x: number;
  y: number;
}

interface UpdatePathAction extends Action {
  type: typeof UPDATE_PATH;
  path: ReadonlyArray<{ x: number; y: number }> | null;
}

interface UpdateStartAction extends Action {
  type: typeof UPDATE_START;
  x: number;
  y: number;
}

export type GridAction =
  | UpdateCellAction
  | UpdateFinishAction
  | UpdatePathAction
  | UpdateStartAction;
