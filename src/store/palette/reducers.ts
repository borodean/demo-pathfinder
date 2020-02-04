import { CellType } from 'config/constants';

import { PaletteAction, PaletteState, SELECT_TYPE } from './types';

export const initialState: PaletteState = {
  currentType: CellType.Regular
};

export const paletteReducer = (state = initialState, action: PaletteAction) => {
  switch (action.type) {
    case SELECT_TYPE:
      return {
        ...state,
        currentType: action.cellType
      };
    default:
      return state;
  }
};
