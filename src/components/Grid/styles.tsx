import React from 'react';
import styled from 'styled-components';

import $Cell from 'components/Cell';
import $Isometry from 'components/Isometry';
import { CellHeight, CellSize } from 'config/constants';

export const Cell = styled($Cell)`
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: inset 0 0 0 2px #0f0;
    z-index: 1;
  }
`;

export const Grid = styled(({ width, ...props }) => <div {...props} />)`
  display: flex;
  flex-wrap: wrap;
  width: ${p => CellSize * p.width}px;
`;

export const Isometry = styled($Isometry)`
  box-sizing: content-box;
  margin: auto;
  padding: ${CellHeight}px 0;
`;
