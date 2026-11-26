import type { Palette } from "../palette.ts";
import { join } from "../color.ts";

export const mintty = (p: Palette): string =>
  `BackgroundColour=${join(p.black.rgb)}
ForegroundColour=${join(p.bright_white.rgb)}
CursorColour=${join(p.bright_yellow.rgb)}
Black=${join(p.black.rgb)}
BoldBlack=${join(p.bright_black.rgb)}
Red=${join(p.red.rgb)}
BoldRed=${join(p.bright_red.rgb)}
Green=${join(p.green.rgb)}
BoldGreen=${join(p.bright_green.rgb)}
Yellow=${join(p.yellow.rgb)}
BoldYellow=${join(p.bright_yellow.rgb)}
Blue=${join(p.blue.rgb)}
BoldBlue=${join(p.bright_blue.rgb)}
Magenta=${join(p.magenta.rgb)}
BoldMagenta=${join(p.bright_magenta.rgb)}
Cyan=${join(p.cyan.rgb)}
BoldCyan=${join(p.bright_cyan.rgb)}
White=${join(p.white.rgb)}
BoldWhite=${join(p.bright_white.rgb)}
`;
