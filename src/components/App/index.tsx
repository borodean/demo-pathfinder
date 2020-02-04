import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import Grid from 'components/Grid';
import { AppState } from 'store';
import { updateCell } from 'store/grid/actions';
import { GridState } from 'store/grid/types';

interface Props {
  grid: GridState;
  updateCell: typeof updateCell;
}

const App: FunctionComponent<Props> = ({ grid }) => {
  return <Grid columns={grid.columns} />;
};

const mapStateToProps = (state: AppState) => ({
  grid: state.grid
});

export default connect(
  mapStateToProps,
  { updateCell }
)(App);
