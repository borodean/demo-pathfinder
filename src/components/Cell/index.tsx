import React, { FunctionComponent, HTMLAttributes } from 'react';

import { Obstacle } from 'config/constants';

import { Cell } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  isFinish?: boolean;
  isStart?: boolean;
  type?: Obstacle;
};

const CellComponent: FunctionComponent<Props> = ({
  isFinish,
  isStart,
  ...props
}) => {
  return (
    <Cell {...props}>
      {isStart && 'A'}
      {isFinish && 'B'}
    </Cell>
  );
};

CellComponent.defaultProps = {
  type: Obstacle.Regular
};

export default CellComponent;
