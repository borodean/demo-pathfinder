import React from 'react';
import styled from 'styled-components';

import $Cell from 'components/Cell';

export const Cell = styled(({isCurrent, ...props}) => <$Cell {...props} />)`
  cursor: pointer;

  ${p => p.isCurrent && `
    box-shadow: 0 0 0 2px blue;
    position: relative;
  `}
`;

export const Palette = styled.div`
  border: 2px solid #000;
  display: flex;
  margin: auto;
  width: fit-content;
`;
