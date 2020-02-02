import React from 'react';
import styled from 'styled-components';

import $Cell from 'components/Cell';
import {CellSize} from 'config/constants';

export const Cell = styled($Cell)`
  float: left;
`;

export const Grid = styled(({width, ...props}) => <div {...props} />)`
  overflow: hidden;
  width: ${p => CellSize * p.width}px;
`;
