import React, { FunctionComponent } from 'react';

import { CellType } from 'config/constants';

import { Cell, Grid } from './styles';

const GridComponent: FunctionComponent = () => {
  return (
    <Grid width={3}>
      <Cell type={CellType.Boulder} />
      <Cell type={CellType.StartingLocation} />
      <Cell type={CellType.Gravel} />
      <Cell />
      <Cell />
      <Cell type={CellType.WormholeEntrance} />
      <Cell type={CellType.TargetLocation} />
      <Cell type={CellType.WormholeExit} />
      <Cell />
    </Grid>
  );
};

export default GridComponent;
