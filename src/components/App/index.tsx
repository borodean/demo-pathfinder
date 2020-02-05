import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import Grid from 'components/Grid';
import Palette from 'components/Palette';
import { AppState } from 'store';
import {
  updateCell,
  updateFinish,
  updatePath,
  updateStart
} from 'store/grid/actions';
import { GridState } from 'store/grid/types';
import { selectTool } from 'store/palette/actions';
import {
  FINISH_LOCATION,
  PaletteState,
  START_LOCATION
} from 'store/palette/types';
import { findPathWithPortals } from 'utils/path';

interface Props {
  grid: GridState;
  palette: PaletteState;
  selectTool: typeof selectTool;
  updateCell: typeof updateCell;
  updateFinish: typeof updateFinish;
  updatePath: typeof updatePath;
  updateStart: typeof updateStart;
}

const App: FunctionComponent<Props> = ({
  grid,
  palette,
  selectTool,
  updateCell,
  updateFinish,
  updatePath,
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
        path={grid.path}
        rows={grid.rows}
        shouldShowPath={grid.shouldShowPath}
        start={grid.start}
      />
      <Palette
        activeTool={palette.activeTool}
        onFind={async () => {
          const mutableRows = grid.rows.map(cols => cols.slice());
          const path = await findPathWithPortals(
            mutableRows,
            grid.start,
            grid.finish
          );
          updatePath(path);
        }}
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
  { selectTool, updateCell, updateFinish, updatePath, updateStart }
)(App);
