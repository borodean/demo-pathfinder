import React from 'react';
import styled from 'styled-components';

import { CellSize, Obstacle } from 'config/constants';

export const Cell = styled(({isFinish, isStart, type, ...props}) => (
  <div {...props} />
))`
  align-items: center;
  background: #c2b280;
  display: flex;
  height: ${CellSize}px;
  justify-content: center;
  width: ${CellSize}px;

  ${p => p.type === Obstacle.Boulder && `
    &::before {
      background: black;
      border-radius: 50%;
      content: '';
      display: block;
      height: 75%;
      width: 75%;
    }
  `}

  ${p => p.type === Obstacle.Gravel && `
    background: silver;
  `}

  ${p => p.type === Obstacle.WormholeEntrance && `
    &::before { content: 'In' }
  `}

  ${p => p.type === Obstacle.WormholeExit && `
    &::before { content: 'Out' }
  `}

  ${p => p.isStart && `
    &::after { content: 'A' }
  `}

  ${p => p.isFinish && `
    &::after { content: 'B' }
  `}
`;
