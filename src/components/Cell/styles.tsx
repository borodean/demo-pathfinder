import React from 'react';
import styled from 'styled-components';

import { CellSize, CellType } from 'config/constants';

export const Cell = styled(({ type, ...props }) => <div {...props} />)`
  align-items: center;
  background: #c2b280;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.1);
  display: flex;
  height: ${CellSize}px;
  justify-content: center;
  width: ${CellSize}px;

  ${p => p.type === CellType.Boulder && `
    &::after {
      background: black;
      border-radius: 50%;
      content: '';
      display: block;
      height: 75%;
      width: 75%;
    }
  `}

  ${p => p.type === CellType.Gravel && `
    background: silver;
  `}

  ${p => p.type === CellType.StartingLocation && `
    &::after { content: 'A' }
  `}

  ${p => p.type === CellType.TargetLocation && `
    &::after { content: 'B' }
  `}

  ${p => p.type === CellType.WormholeEntrance && `
    &::after { content: 'In' }
  `}

  ${p => p.type === CellType.WormholeExit && `
    &::after { content: 'Out' }
  `}
`;
