import { Obstacle } from 'config/constants';

import {
  GridAction,
  UPDATE_CELL,
  UPDATE_FINISH,
  UPDATE_PATH,
  UPDATE_START
} from './types';

export const updateFinish = (x: number, y: number): GridAction => ({
  type: UPDATE_FINISH,
  x,
  y
});

export const updatePath = (
  path: ReadonlyArray<{ x: number; y: number }> | null
): GridAction => ({
  type: UPDATE_PATH,
  path
});

export const updateStart = (x: number, y: number): GridAction => ({
  type: UPDATE_START,
  x,
  y
});

export const updateCell = (
  x: number,
  y: number,
  cellType: Obstacle
): GridAction => ({
  type: UPDATE_CELL,
  x,
  y,
  cellType
});
