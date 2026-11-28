import type { Palette } from "../palette.ts";
import { lower } from "../color.ts";

export const chromeSecureShell = (p: Palette): string =>
  `"background-color": "${lower(p.black.hex)}",
"foreground-color": "${lower(p.bright_white.hex)}",
"cursor-color":     "${lower(p.bright_yellow.hex)}",
"color-palette-overrides": [
  "${lower(p.black.hex)}",
  "${lower(p.red.hex)}",
  "${lower(p.green.hex)}",
  "${lower(p.yellow.hex)}",
  "${lower(p.blue.hex)}",
  "${lower(p.magenta.hex)}",
  "${lower(p.cyan.hex)}",
  "${lower(p.white.hex)}",
  "${lower(p.bright_black.hex)}",
  "${lower(p.bright_red.hex)}",
  "${lower(p.bright_green.hex)}",
  "${lower(p.bright_yellow.hex)}",
  "${lower(p.bright_blue.hex)}",
  "${lower(p.bright_magenta.hex)}",
  "${lower(p.bright_cyan.hex)}",
  "${lower(p.bright_white.hex)}"
  ]
`;
