import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import Grid from 'components/Grid';
import Palette from 'components/Palette';
import { AppState } from 'store';
import { updateCell, updateFinish, updateStart } from 'store/grid/actions';
import { GridState } from 'store/grid/types';
import { selectTool } from 'store/palette/actions';
import {
  FINISH_LOCATION,
  PaletteState,
  START_LOCATION
} from 'store/palette/types';

interface Props {
  grid: GridState;
  palette: PaletteState;
  selectTool: typeof selectTool;
  updateCell: typeof updateCell;
  updateFinish: typeof updateFinish;
  updateStart: typeof updateStart;
}

const App: FunctionComponent<Props> = ({
  grid,
  palette,
  selectTool,
  updateCell,
  updateFinish,
  updateStart
}) => {
  return (
    <div>
      <Grid
        finish={grid.finish}
        onDraw={(x, y) => {
          if (palette.activeTool === START_LOCATION) {
            updateStart(x, y);
          } else if (palette.activeTool === FINISH_LOCATION) {
            updateFinish(x, y);
          } else {
            updateCell(x, y, palette.activeTool);
          }
        }}
        rows={grid.rows}
        start={grid.start}
      />
      <Palette
        activeTool={palette.activeTool}
        onSelectTool={selectTool}
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
  { selectTool, updateCell, updateFinish, updateStart }
)(App);
