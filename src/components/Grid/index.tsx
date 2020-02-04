import { flatMap, isEqual } from 'lodash';
import React, { FunctionComponent, useState } from 'react';

import { Obstacle } from 'config/constants';

import { Cell, Grid } from './styles';

interface Props {
  finish: {x: Number; y: Number};
  onDraw(x: Number, y: Number): any;
  rows: ReadonlyArray<ReadonlyArray<Obstacle>>;
  start: {x: Number; y: Number};
}

const GridComponent: FunctionComponent<Props> = ({
  finish,
  onDraw,
  rows,
  start
}) => {
  const [isDrawing, setIsDrawing] = useState(false);

  const createOnMouseDown = (x: Number, y: Number) => () => {
    setIsDrawing(true);
    onDraw(x, y);
    document.addEventListener('mouseup', onMouseUp);
  };

  const createOnMouseMove = (x: Number, y: Number) => () => {
    if (isDrawing) {
      onDraw(x, y);
    }
  };

  const onMouseUp = () => {
    document.removeEventListener('mouseup', onMouseUp);
    setIsDrawing(false);
  };

  return (
    <Grid width={rows[0].length}>
      {flatMap(rows, (types, y) =>
        types.map((type, x) => (
          <Cell
            isFinish={isEqual({x, y}, finish)}
            isStart={isEqual({x, y}, start)}
            key={`${x}:${y}`}
            onMouseDown={createOnMouseDown(x, y)}
            onMouseMove={createOnMouseMove(x, y)}
            type={type}
          />
        ))
      )}
    </Grid>
  );
};

export default GridComponent;
