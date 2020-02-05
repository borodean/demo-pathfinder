import EasyStar from 'easystarjs';
import { minBy, sumBy } from 'lodash';

import { Obstacle } from 'config/constants';

type Point = { x: number; y: number };
type Path = Point[] | null;

export const findShortestPath = (rows: Obstacle[][], paths: Path[]): Path => {
  const shortestPath = minBy(paths, path =>
    sumBy(path, point => {
      const type = rows[point.y][point.x];

      if (type === Obstacle.Gravel) {
        return 2;
      }

      if (type === Obstacle.Boulder) {
        return 0;
      }

      return 1;
    })
  );
  return shortestPath || null;
};

export const findPath = async (
  rows: Obstacle[][],
  start: Point,
  finish: Point,
  allowWormholeEntrance: boolean = false
): Promise<Path> => {
  const easystar = new EasyStar.js();
  easystar.enableSync();
  easystar.setGrid(rows);

  const acceptableTiles = [Obstacle.Gravel, Obstacle.Regular];

  if (allowWormholeEntrance) {
    acceptableTiles.push(Obstacle.WormholeEntrance);
  }

  easystar.setAcceptableTiles(acceptableTiles);

  easystar.setTileCost(Obstacle.Gravel, 2);
  easystar.setTileCost(Obstacle.Regular, 1);

  if (allowWormholeEntrance) {
    easystar.setTileCost(Obstacle.WormholeEntrance, 1);
  }

  return new Promise(resolve => {
    easystar.findPath(start.x, start.y, finish.x, finish.y, resolve);
    easystar.calculate();
  });
};

export const findPathWithPortals = async (
  rows: Obstacle[][],
  start: Point,
  finish: Point
): Promise<Path> => {
  const entrances: Point[] = [];
  const exits: Point[] = [];

  const regularPath = await findPath(rows, start, finish);

  rows.forEach((types, y) => {
    types.forEach((type, x) => {
      if (type === Obstacle.WormholeEntrance) {
        entrances.push({ x, y });
      } else if (type === Obstacle.WormholeExit) {
        exits.push({ x, y });
      }
    });
  });

  if (!entrances.length || !exits.length) {
    return regularPath;
  }

  const [pathsToEntrances, pathsFromExits] = await Promise.all([
    Promise.all(
      entrances.map(entrance => findPath(rows, start, entrance, true))
    ),
    Promise.all(exits.map(exit => findPath(rows, exit, finish)))
  ]);

  const shortestPathToEntrance = findShortestPath(rows, pathsToEntrances);
  const shortestPathFromExit = findShortestPath(rows, pathsFromExits);

  if (!shortestPathToEntrance || !shortestPathFromExit) {
    return regularPath;
  }

  const portalPath = [...shortestPathToEntrance, ...shortestPathFromExit];

  return findShortestPath(rows, [regularPath, portalPath]);
};
