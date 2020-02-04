import React, { FunctionComponent } from 'react';

import { Obstacle } from 'config/constants';

import { Cell, Palette } from './styles';

interface Props {
  currentType: Obstacle;
  onCellClick(cellType: Obstacle): any;
}

const PaletteComponent: FunctionComponent<Props> = ({
  currentType,
  onCellClick
}) => {
  const orderedTypes = [
    Obstacle.Regular,
    Obstacle.Gravel,
    Obstacle.Boulder,
    Obstacle.WormholeEntrance,
    Obstacle.WormholeExit
  ];

  return (
    <Palette>
      {orderedTypes.map(type => (
        <Cell
          isCurrent={type === currentType}
          key={type}
          onClick={() => onCellClick(type)}
          type={type}
        />
      ))}
    </Palette>
  );
};

export default PaletteComponent;
