import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { CellHeight } from 'config/constants';
import $Isometry from 'components/Isometry';

export const Button = styled(({ isPressed, ...props }) => (
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
  ` : `
    &:hover {
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
