import EasyStar from 'easystarjs';

import { Obstacle } from 'config/constants';

export const findPath = (
  rows: Obstacle[][],
  start: { x: number; y: number },
  finish: { x: number; y: number },
  callback: (path: { x: number; y: number }[]) => any
) => {
  const easystar = new EasyStar.js();
  easystar.enableSync();
  easystar.setGrid(rows);
  easystar.setAcceptableTiles([Obstacle.Gravel, Obstacle.Regular]);
  easystar.setTileCost(Obstacle.Gravel, 2);
  easystar.setTileCost(Obstacle.Regular, 1);
  easystar.findPath(start.x, start.y, finish.x, finish.y, callback);
  easystar.calculate();
};
