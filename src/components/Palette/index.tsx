import React, {FunctionComponent} from 'react';

import {CellType} from 'config/constants';

import {Cell, Palette} from './styles';

interface Props {
  currentType: CellType;
  selectCellType(type: CellType): void;
}

const PaletteComponent: FunctionComponent<Props> = ({currentType, selectCellType}) => {
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
        <Cell key={type} isCurrent={type === currentType} onClick={() => selectCellType(type)} type={type} />
      ))}
    </Palette>
  );
};

export default PaletteComponent;
