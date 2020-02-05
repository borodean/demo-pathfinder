import React, { FunctionComponent } from 'react';

import Cell from 'components/Cell';
import { Obstacle } from 'config/constants';
import {
  FINISH_LOCATION,
  PaletteTool,
  START_LOCATION
} from 'store/palette/types';

import { Button, Group, Isometry, Palette, Title } from './styles';

interface Props {
  activeTool: PaletteTool;
  onFind(): any;
  onSelectTool(tool: PaletteTool): any;
}

const PaletteComponent: FunctionComponent<Props> = ({
  activeTool,
  onFind,
  onSelectTool
}) => {
  const obstacles = [
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
      {obstacles.map((group, index) => (
        <Group key={index}>
          {group.map(tool => (
            <Button
              isPressed={tool.type === activeTool}
              key={tool.type}
              onClick={() => onSelectTool(tool.type)}
            >
              <Isometry>
                <Cell type={tool.type} />
              </Isometry>
              <Title>{tool.title}</Title>
            </Button>
          ))}
        </Group>
      ))}
      <Group>
        <Button
          isPressed={activeTool === START_LOCATION}
          onClick={() => onSelectTool(START_LOCATION)}
        >
          <Isometry>
            <Cell isStart />
          </Isometry>
          <Title>Start Location</Title>
        </Button>
        <Button
          isPressed={activeTool === FINISH_LOCATION}
          onClick={() => onSelectTool(FINISH_LOCATION)}
        >
          <Isometry>
            <Cell isFinish />
          </Isometry>
          <Title>Finish Location</Title>
        </Button>
      </Group>
      <Group>
        <Button isPrimary onClick={onFind}>Find</Button>
      </Group>
    </Palette>
  );
};

export default PaletteComponent;
