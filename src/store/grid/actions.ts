import { GridAction, UPDATE_CELL } from './types';

export const updateCell = (): GridAction => ({
  type: UPDATE_CELL
});
