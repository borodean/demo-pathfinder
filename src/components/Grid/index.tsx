import { flatMap, isEqual } from 'lodash';
import React, { FunctionComponent, useState } from 'react';

import { Obstacle } from 'config/constants';

import { Cell, Grid, Isometry } from './styles';

interface Props {
  finish: {x: number; y: number};
  onDraw(x: number, y: number): any;
  rows: ReadonlyArray<ReadonlyArray<Obstacle>>;
  start: {x: number; y: number};
}

const GridComponent: FunctionComponent<Props> = ({
  finish,
  onDraw,
  rows,
  start
}) => {
  const [isDrawing, setIsDrawing] = useState(false);

  const createOnMouseDown = (x: number, y: number) => () => {
    setIsDrawing(true);
    onDraw(x, y);
    document.addEventListener('mouseup', onMouseUp);
  };

  const createOnMouseMove = (x: number, y: number) => () => {
    if (isDrawing) {
      onDraw(x, y);
    }
  };

  const onMouseUp = () => {
    document.removeEventListener('mouseup', onMouseUp);
    setIsDrawing(false);
  };

  const width = rows[0].length;
  const height = rows.length;

  return (
    <Isometry height={height} width={width}>
      <Grid width={width}>
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
    </Isometry>
  );
};

export default GridComponent;
