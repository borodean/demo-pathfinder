import React from 'react';
import styled from 'styled-components';

import { CellHeight, CellSize } from 'config/constants';
import $Isometry from 'components/Isometry';

export const Button = styled(({ isPressed, isPrimary, ...props }) => (
  <button {...props} />
)).attrs({
  type: 'button'
})`
  background: linear-gradient(#90a4ae, #78909c);
  border: 1px solid #546e7a;
  border-radius: 4px;
  box-shadow: inset 0 1px #cfd8dc;
  color: #eceff1;
  cursor: pointer;
  display: block;
  font: inherit;
  padding: 4px;
  position: relative;
  text-align: center;
  width: min-content;

  ${p => p.isPressed ? `
    background: linear-gradient(#42a5f5, #1e88e5);
    border-color: #1976d2;
    box-shadow: inset 0 2px 2px #1976d2;
    color: #bbdefb;
    z-index: 2;
  ` : p.isPrimary ? `
    background: linear-gradient(#ffb74d, #ffa726);
    border-color: #fb8c00;
    box-shadow: inset 0 1px #ffe0b2;
    color: #fff3e0;
    width: ${CellSize * Math.sqrt(2) + 10}px;

    &:hover,
    &:focus {
      background: linear-gradient(#ffcc80, #ffb74d);
      border-color: #ffa726;
      box-shadow: inset 0 1px #fff3e0;
    }

    &:active {
      background: linear-gradient(#ffa726, #fb8c00);
      border-color: #f57c00;
      box-shadow: inset 0 2px 2px #f57c00;
      color: #ffe0b2;
    }
  ` : `
    &:hover,
    &:focus {
      background: linear-gradient(#b0bec5, #90a4ae);
      border-color: #78909c;
      box-shadow: inset 0 1px #eceff1;
      color: #fff;
      z-index: 1;
    }

    &:active {
      background: linear-gradient(#78909c, #546e7a);
      border-color: #455a64;
      box-shadow: inset 0 2px 2px #455a64;
      color: #cfd8dc;
      z-index: 1;
    }
  `}

  &:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -1px;
  }

  &:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const Group = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const Isometry = styled($Isometry).attrs({ height: 1, width: 1 })`
  margin-bottom: ${CellHeight}px;
  margin-top: ${CellHeight}px;
`;

export const Palette = styled.div`
  display: flex;
  margin: auto;
  width: fit-content;
`;

export const Title = styled.div`
  padding-top: 5px;
`;
