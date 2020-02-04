import update from 'immutability-helper';
import { fill, times } from 'lodash';

import { CellType, GridHeight, GridWidth } from 'config/constants';

import { GridAction, GridState, UPDATE_CELL } from './types';

export const initialState: GridState = {
  rows: times(GridHeight, () => fill(Array(GridWidth), CellType.Regular))
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
    default:
      return state;
  }
};
