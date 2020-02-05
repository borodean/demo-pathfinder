import React, { FunctionComponent } from 'react';

import Cell from 'components/Cell';
import { Obstacle } from 'config/constants';

import { Button, Group, Isometry, Palette, Title } from './styles';

interface Props {
  currentType: Obstacle;
  onCellClick(cellType: Obstacle): any;
}

const PaletteComponent: FunctionComponent<Props> = ({
  currentType,
  onCellClick
}) => {
  const groups = [
    [
      { type: Obstacle.Regular, title: 'Dirt' },
      { type: Obstacle.Gravel, title: 'Gravel' },
      { type: Obstacle.Boulder, title: 'Boulder' }
    ],
    [
      { type: Obstacle.WormholeEntrance, title: 'Wormhole Entrance' },
      { type: Obstacle.WormholeExit, title: 'Wormhole Exit' }
    ]
  ];

  return (
    <Palette>
      {groups.map((group, index) => (
        <Group key={index}>
          {group.map(tool => (
            <Button
              isPressed={tool.type === currentType}
              key={tool.type}
              onClick={() => onCellClick(tool.type)}
            >
              <Isometry>
                <Cell type={tool.type} />
              </Isometry>
              <Title>{tool.title}</Title>
            </Button>
          ))}
        </Group>
      ))}
    </Palette>
  );
};

export default PaletteComponent;
