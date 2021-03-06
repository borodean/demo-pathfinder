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
  position: relative;
  width: ${p => CellSize * p.width}px;
`;

export const Isometry = styled($Isometry)`
  box-sizing: content-box;
  margin: auto;
  padding: ${CellHeight}px 0;
`;

export const NotFound = styled.div`
  color: lime;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 500px);
`;

export const OffsetParent = styled.div`
  position: relative;
`;

export const Step = styled(({ x, y, ...props }) => <div {...props} />)`
  background: lime;
  height: ${p => CellSize}px;
  left: ${p => p.x * CellSize}px;
  opacity: 0.5;
  pointer-events: none;
  position: absolute;
  top: ${p => p.y * CellSize}px;
  transform: translateZ(0.01px); // safari rendering fix
  width: ${p => CellSize}px;
  z-index: 2;
`;
