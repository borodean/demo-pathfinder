import React from 'react';
import styled from 'styled-components';

import $Cell from 'components/Cell';
import $Isometry from 'components/Isometry';
import { CellSize } from 'config/constants';

export const Cell = styled($Cell)`
  cursor: pointer;
  float: left;

  &:hover {
    box-shadow: 0 0 0 2px green;
    position: relative;
  }
`;

export const Grid = styled(({ width, ...props }) => <div {...props} />)`
  overflow: hidden;
  width: ${p => CellSize * p.width}px;
`;

export const Isometry = styled($Isometry)`
  margin: auto;
`;
