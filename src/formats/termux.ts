import type { Palette } from "../palette.ts";
import { lower } from "../color.ts";

export const termux = (p: Palette): string =>
  `# https://github.com/srcery-colors/srcery-terminal/
# Special
foreground=${lower(p.bright_white.hex)}
background=${lower(p.black.hex)}
cursor=${lower(p.bright_yellow.hex)}
# Black
color0=${lower(p.black.hex)}
color8=${lower(p.bright_black.hex)}
# Red
color1=${lower(p.red.hex)}
color9=${lower(p.bright_red.hex)}
# Green
color2=${lower(p.green.hex)}
color10=${lower(p.bright_green.hex)}
# Yellow
color3=${lower(p.yellow.hex)}
color11=${lower(p.bright_yellow.hex)}
# Blue
color4=${lower(p.blue.hex)}
color12=${lower(p.bright_blue.hex)}
# Magenta
color5=${lower(p.magenta.hex)}
color13=${lower(p.bright_magenta.hex)}
# Cyan
color6=${lower(p.cyan.hex)}
color14=${lower(p.bright_cyan.hex)}
# White
color7=${lower(p.white.hex)}
color15=${lower(p.bright_white.hex)}
`;
