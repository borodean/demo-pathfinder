import { Obstacle } from 'config/constants';

import { PaletteAction, PaletteState, SELECT_TOOL } from './types';

export const initialState: PaletteState = {
  activeTool: Obstacle.Regular
};

export const paletteReducer = (state = initialState, action: PaletteAction) => {
  switch (action.type) {
    case SELECT_TOOL:
      return {
        ...state,
        activeTool: action.tool
      };
    default:
      return state;
  }
};
