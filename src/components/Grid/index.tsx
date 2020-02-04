import { flatMap } from 'lodash';
import React, { FunctionComponent } from 'react';

import { CellType } from 'config/constants';

import { Cell, Grid } from './styles';

interface Props {
  onCellClick(x: Number, y: Number): any;
  rows: ReadonlyArray<ReadonlyArray<CellType>>;
}

const GridComponent: FunctionComponent<Props> = ({ onCellClick, rows }) => {
  return (
    <Grid width={rows[0].length}>
      {flatMap(rows, (types, y) =>
        types.map((type, x) => (
          <Cell
            key={`${x}:${y}`}
            onClick={() => onCellClick(x, y)}
            type={type}
          />
        ))
      )}
    </Grid>
  );
};

export default GridComponent;
