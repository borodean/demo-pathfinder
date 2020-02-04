import update from 'immutability-helper';
import { fill, times } from 'lodash';

import { GridHeight, GridWidth, Obstacle } from 'config/constants';

import {
  GridAction,
  GridState,
  UPDATE_CELL,
  UPDATE_FINISH,
  UPDATE_START
} from './types';

export const initialState: GridState = {
  finish: { x: GridWidth - 1, y: GridHeight - 1 },
  rows: times(GridHeight, () => fill(Array(GridWidth), Obstacle.Regular)),
  start: { x: 0, y: 0 }
};

export const gridReducer = (state = initialState, action: GridAction) => {
  switch (action.type) {
    case UPDATE_CELL:
      return update(state, {
        rows: {
          [String(action.y)]: {
            [String(action.x)]: { $set: action.cellType }
          }
        }
      });
    case UPDATE_FINISH:
      return update(state, {
        finish: { $set: { x: action.x, y: action.y } },
        rows: {
          [String(action.y)]: {
            [String(action.x)]: { $set: Obstacle.Regular }
          }
        }
      });
    case UPDATE_START:
      return update(state, {
        start: { $set: { x: action.x, y: action.y } },
        rows: {
          [String(action.y)]: {
            [String(action.x)]: { $set: Obstacle.Regular }
          }
        }
      });
    default:
      return state;
  }
};
