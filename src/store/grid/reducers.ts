import { GridAction, GridState, UPDATE_CELL } from './types';

export const initialState: GridState = {};

export const gridReducer = (
  state = initialState,
  action: GridAction
) => {
  switch (action.type) {
    case UPDATE_CELL:
      return { ...state };
    default:
      return state;
  }
};
