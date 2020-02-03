import { Action } from 'redux';

export interface ApplicationState {}

export const UPDATE_CELL = 'UPDATE_CELL';

interface UpdateCellAction extends Action {
  type: typeof UPDATE_CELL;
}

export type ApplicationAction = UpdateCellAction;
