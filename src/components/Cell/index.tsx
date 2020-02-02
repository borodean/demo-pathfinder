import React, {FunctionComponent} from 'react';

import {CellType} from 'config/constants';

import {Cell} from './styles';

type Props = {
  type?: CellType;
};

const CellComponent: FunctionComponent<Props> = props => {
  return <Cell {...props} />;
};

CellComponent.defaultProps = {
  type: CellType.Regular
};

export default CellComponent;
