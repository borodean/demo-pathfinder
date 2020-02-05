import { flatMap, isEqual } from 'lodash';
import React, { FunctionComponent, useState } from 'react';

import { Obstacle } from 'config/constants';

import { Cell, Grid, Isometry, NotFound, OffsetParent, Step } from './styles';

interface Props {
  finish: { x: number; y: number };
  onDraw(x: number, y: number): any;
  path: ReadonlyArray<{ x: number; y: number }> | null;
  rows: ReadonlyArray<ReadonlyArray<Obstacle>>;
  shouldShowPath: boolean;
  start: { x: number; y: number };
}

const GridComponent: FunctionComponent<Props> = ({
  finish,
  onDraw,
  path,
  rows,
  shouldShowPath,
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
    <OffsetParent>
      <Isometry height={height} width={width}>
        <Grid width={width}>
          {flatMap(rows, (types, y) =>
            types.map((type, x) => (
              <Cell
                isFinish={isEqual({ x, y }, finish)}
                isStart={isEqual({ x, y }, start)}
                key={`${x}:${y}`}
                onMouseDown={createOnMouseDown(x, y)}
                onMouseMove={createOnMouseMove(x, y)}
                type={type}
              />
            ))
          )}
          {shouldShowPath &&
            path &&
            path.map(({ x, y }) => <Step key={`${x}:${y}`} x={x} y={y} />)}
        </Grid>
      </Isometry>
      {shouldShowPath && !path && (
        <NotFound>Shoot! Looks like I can't get there.</NotFound>
      )}
    </OffsetParent>
  );
};

export default GridComponent;
