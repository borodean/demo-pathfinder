import React, { FunctionComponent, HTMLAttributes } from 'react';

import { Actor, Isometry } from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  height: number;
  width: number;
}

const IsometryComponent: FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  return (
    <Isometry {...props}>
      <Actor>{children}</Actor>
    </Isometry>
  );
};

export default IsometryComponent;
