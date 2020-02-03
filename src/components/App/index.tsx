import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import Grid from 'components/Grid';
import configureStore from 'store';

const store = configureStore();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Grid />
    </ReduxProvider>
  );
};

export default App;
