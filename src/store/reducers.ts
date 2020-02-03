import { ApplicationAction, ApplicationState, UPDATE_CELL } from './types';

export const initialState: ApplicationState = {};

export const applicationReducer = (
  state = initialState,
  action: ApplicationAction
) => {
  switch (action.type) {
    case UPDATE_CELL:
      return { ...state };
    default:
      return state;
  }
};
