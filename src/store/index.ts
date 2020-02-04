import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { applicationReducer } from './reducers';

const configureStore = () => {
  return createStore(applicationReducer, devToolsEnhancer({}));
};

export default configureStore;
