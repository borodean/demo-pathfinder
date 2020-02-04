import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { gridReducer } from './grid/reducers';
import { paletteReducer } from './palette/reducers';

const rootReducer = combineReducers({
  grid: gridReducer,
  palette: paletteReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () =>
  createStore(rootReducer, devToolsEnhancer({}));

export default configureStore;
