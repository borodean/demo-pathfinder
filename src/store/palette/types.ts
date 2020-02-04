import { Action } from 'redux';

import { Obstacle } from 'config/constants';

export interface PaletteState {
  currentType: Obstacle;
}

export const SELECT_TYPE = 'SELECT_TYPE';

interface SelectTypeAction extends Action {
  type: typeof SELECT_TYPE;
  cellType: Obstacle;
}

export type PaletteAction = SelectTypeAction;
