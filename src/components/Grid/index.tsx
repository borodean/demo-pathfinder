import { flatMap } from 'lodash';
import React, { FunctionComponent } from 'react';

import { CellType } from 'config/constants';

import { Cell, Grid } from './styles';

interface Props {
  columns: ReadonlyArray<ReadonlyArray<CellType>>;
}

const GridComponent: FunctionComponent<Props> = ({ columns }) => {
  return (
    <Grid width={columns.length}>
      {flatMap(columns, (types, x) =>
        types.map((type, y) => <Cell key={`${x}:${y}`} type={type} />)
      )}
    </Grid>
  );
};

export default GridComponent;
