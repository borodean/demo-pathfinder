import React from 'react';
import styled from 'styled-components';

import { CellSize } from 'config/constants';

export const Isometry = styled(({ height, width, ...props }) => (
  <div {...props} />
))`
  height: ${p => p.height * CellSize * Math.sqrt(2) / 2}px;
  position: relative;
  width: ${p => p.width * CellSize * Math.sqrt(2)}px;

  * {
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
`;

export const Actor = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotateX(60deg) rotateZ(45deg);
`;
