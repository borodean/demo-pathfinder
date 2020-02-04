import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import Grid from 'components/Grid';
import Palette from 'components/Palette';
import { AppState } from 'store';
import { updateCell } from 'store/grid/actions';
import { GridState } from 'store/grid/types';
import { selectCellType } from 'store/palette/actions';
import { PaletteState } from 'store/palette/types';

interface Props {
  grid: GridState;
  palette: PaletteState;
  selectCellType: typeof selectCellType;
  updateCell: typeof updateCell;
}

const App: FunctionComponent<Props> = ({
  grid,
  palette,
  selectCellType,
  updateCell
}) => {
  return (
    <div>
      <Grid
        onDraw={(x, y) => updateCell(x, y, palette.currentType)}
        rows={grid.rows}
      />
      <Palette
        currentType={palette.currentType}
        onCellClick={selectCellType}
      />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  grid: state.grid,
  palette: state.palette
});

export default connect(
  mapStateToProps,
  { selectCellType, updateCell }
)(App);
