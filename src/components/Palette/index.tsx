import React, { FunctionComponent } from 'react';

import { CellType } from 'config/constants';

import { Cell, Palette } from './styles';

interface Props {
  currentType: CellType;
  onCellClick(cellType: CellType): any;
}

const PaletteComponent: FunctionComponent<Props> = ({
  currentType,
  onCellClick
}) => {
  const orderedTypes = [
    CellType.Regular,
    CellType.Gravel,
    CellType.Boulder,
    CellType.WormholeEntrance,
    CellType.WormholeExit,
    CellType.StartingLocation,
    CellType.TargetLocation
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
