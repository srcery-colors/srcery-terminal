import type { Palette } from "../palette.ts";
import { lower } from "../color.ts";

export const alacritty = (p: Palette): string =>
  `# https://github.com/srcery-colors/srcery-terminal/

[colors.primary]
background = "${lower(p.black.hex)}"
foreground = "${lower(p.bright_white.hex)}"

[colors.cursor]
text = "CellBackground"
cursor = "${lower(p.bright_yellow.hex)}"

[colors.normal]
black = "${lower(p.black.hex)}"
red = "${lower(p.red.hex)}"
green = "${lower(p.green.hex)}"
yellow = "${lower(p.yellow.hex)}"
blue = "${lower(p.blue.hex)}"
magenta = "${lower(p.magenta.hex)}"
cyan = "${lower(p.cyan.hex)}"
white = "${lower(p.white.hex)}"

[colors.bright]
black = "${lower(p.bright_black.hex)}"
red = "${lower(p.bright_red.hex)}"
green = "${lower(p.bright_green.hex)}"
yellow = "${lower(p.bright_yellow.hex)}"
blue = "${lower(p.bright_blue.hex)}"
magenta = "${lower(p.bright_magenta.hex)}"
cyan = "${lower(p.bright_cyan.hex)}"
white = "${lower(p.bright_white.hex)}"
`;
