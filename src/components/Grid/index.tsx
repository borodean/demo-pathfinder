import { flatMap } from 'lodash';
import React, { FunctionComponent } from 'react';

import { CellType } from 'config/constants';

import { Cell, Grid } from './styles';

interface Props {
  columns: ReadonlyArray<ReadonlyArray<CellType>>;
  onCellClick(x: Number, y: Number): any;
}

const GridComponent: FunctionComponent<Props> = ({ columns, onCellClick }) => {
  return (
    <Grid width={columns.length}>
      {flatMap(columns, (types, x) =>
        types.map((type, y) => (
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
