import React, { FunctionComponent, HTMLAttributes } from 'react';

import { Obstacle } from 'config/constants';

import { Cell } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  isFinish?: boolean;
  isStart?: boolean;
  type?: Obstacle;
};

const CellComponent: FunctionComponent<Props> = props => {
  return <Cell {...props} />;
};

CellComponent.defaultProps = {
  type: Obstacle.Regular
};

export default CellComponent;
