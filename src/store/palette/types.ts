import { Action } from 'redux';

import { Obstacle } from 'config/constants';

export const FINISH_LOCATION = 'FINISH_LOCATION';
export const START_LOCATION = 'START_LOCATION';

export type PaletteTool =
  | Obstacle
  | typeof FINISH_LOCATION
  | typeof START_LOCATION;

export interface PaletteState {
  activeTool: PaletteTool;
}

export const SELECT_TOOL = 'SELECT_TOOL';

interface SelectTypeAction extends Action {
  type: typeof SELECT_TOOL;
  tool: PaletteTool;
}

export type PaletteAction = SelectTypeAction;
