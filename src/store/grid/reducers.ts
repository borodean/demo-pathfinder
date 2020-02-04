import update from 'immutability-helper';
import { fill, times } from 'lodash';

import { CellType, GridHeight, GridWidth } from 'config/constants';

import { GridAction, GridState, UPDATE_CELL } from './types';

export const initialState: GridState = {
  columns: times(GridWidth, () => fill(Array(GridHeight), CellType.Regular))
};

export const gridReducer = (state = initialState, action: GridAction) => {
  switch (action.type) {
    case UPDATE_CELL:
      return update(state, {
        columns: {
          [String(action.x)]: {
            [String(action.y)]: { $set: action.cellType }
          }
        }
      });
    default:
      return state;
  }
};
