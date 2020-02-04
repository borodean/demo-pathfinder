import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { gridReducer } from './grid/reducers';

const rootReducer = combineReducers({
  grid: gridReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () =>
  createStore(rootReducer, devToolsEnhancer({}));

export default configureStore;
