import React from 'react';
import styled from 'styled-components';

import { CellHeight, CellSize, Obstacle } from 'config/constants';

export const Cell = styled(({isFinish, isStart, type, ...props}) => (
  <div {...props} />
))`
  font-size: ${CellSize}px;
  font-weight: bold;
  height: ${CellSize}px;
  line-height: ${CellSize}px;
  position: relative;
  text-align: center;
  width: ${CellSize}px;

  &,
  &::before,
  &::after {
    transition-duration: 0.1s;
    transition-property: background-color, transform;
    transition-timing-function: ease-out;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    height: ${CellHeight}px;
    left: 0;
    top: 100%;
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    width: 100%;
  }

  &::after {
    height: 100%;
    left: 100%;
    top: 0;
    transform: rotateY(90deg);
    transform-origin: 0 50%;
    width: ${CellHeight}px;
  }

  ${p => p.type === Obstacle.Boulder && `
    background: #acacac;
    transform: translateZ(${CellHeight}px);

    &::before {
      background: #5c5c5c;
      transform: rotateX(-90deg) scaleY(2);
    }

    &::after {
      background: #303030;
      transform: rotateY(90deg) scaleX(2);
    }
  `}

  ${p => p.type === Obstacle.Gravel && `
    background: #949494;

    &::before {
      background: #5c5c5c;
    }

    &::after {
      background: #303030;
    }
  `}

  ${p => p.type === Obstacle.Regular && `
    background: #a3581f;

    &::before {
      background: #7f4010;
    }

    &::after {
      background: #5f240a;
    }
  `}

  ${p => p.type === Obstacle.WormholeEntrance && `
    background: red;
    transform: translateZ(${-CellHeight}px);

    &::before {
      transform: rotateX(-90deg) scaleY(0);
    }

    &::after {
      transform: rotateY(90deg) scaleX(0);
    }
  `}

  ${p => p.type === Obstacle.WormholeExit && `
    background: blue;
    transform: translateZ(${-CellHeight}px);

    &::before {
      transform: rotateX(-90deg) scaleY(0);
    }

    &::after {
      transform: rotateY(90deg) scaleX(0);
    }
  `}
`;
