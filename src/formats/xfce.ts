import type { Palette } from "../palette.ts";
import { double } from "../color.ts";

export const xfce = (p: Palette): string =>
  `[Scheme]
Name=srcery
ColorCursor=${double(p.bright_yellow.hex)}
ColorCursorUseDefault=FALSE
ColorForeground=${double(p.bright_white.hex)}
ColorBackground=${double(p.black.hex)}
ColorPalette=${double(p.black.hex)};${double(p.red.hex)};${double(p.green.hex)};${double(p.yellow.hex)};${double(p.blue.hex)};${double(p.magenta.hex)};${double(p.cyan.hex)};${double(p.white.hex)};${double(p.bright_black.hex)};${double(p.bright_red.hex)};${double(p.bright_green.hex)};${double(p.bright_yellow.hex)};${double(p.bright_blue.hex)};${double(p.bright_magenta.hex)};${double(p.bright_cyan.hex)};${double(p.bright_white.hex)}
`;
