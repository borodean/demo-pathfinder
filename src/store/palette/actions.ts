import { Obstacle } from 'config/constants';

import { PaletteAction, PaletteTool, SELECT_TOOL } from './types';

export const selectTool = (tool: PaletteTool): PaletteAction => ({
  type: SELECT_TOOL,
  tool
});
