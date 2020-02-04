import React, { FunctionComponent, HTMLAttributes } from 'react';

import { CellType } from 'config/constants';

import { Cell } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  type?: CellType;
};

const CellComponent: FunctionComponent<Props> = props => {
  return <Cell {...props} />;
};

CellComponent.defaultProps = {
  type: CellType.Regular
};

export default CellComponent;
