import React from 'react';
import styled from 'styled-components';

import { CellSize, Obstacle } from 'config/constants';

export const Cell = styled(({isFinish, isStart, type, ...props}) => (
  <div {...props} />
))`
  height: ${CellSize}px;
  position: relative;
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
    height: 10px;
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
    width: 10px;
  }

  ${p => p.type === Obstacle.Boulder && `
    background: silver;
    transform: translateZ(10px);

    &::before {
      background: white;
      transform: rotateX(-90deg) scaleY(2);
    }

    &::after {
      background: gray;
      transform: rotateY(90deg) scaleX(2);
    }
  `}

  ${p => p.type === Obstacle.Gravel && `
    background: gray;

    &::before {
      background: silver;
    }

    &::after {
      background: black;
    }
  `}

  ${p => p.type === Obstacle.Regular && `
    background: orange;

    &::before {
      background: yellow;
    }

    &::after {
      background: red;
    }
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
