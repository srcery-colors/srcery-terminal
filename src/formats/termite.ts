import type { Palette } from "../palette.ts";
import { lower } from "../color.ts";

export const termite = (p: Palette): string =>
  `[colors]

# special
foreground        = ${lower(p.bright_white.hex)}
foreground_bold   = ${lower(p.bright_white.hex)}
background        = ${lower(p.black.hex)}
cursor            = ${lower(p.bright_yellow.hex)}
cursor_foreground = ${lower(p.black.hex)}

# black
color0  = ${lower(p.black.hex)}
color8  = ${lower(p.bright_black.hex)}

# red
color1  = ${lower(p.red.hex)}
color9  = ${lower(p.bright_red.hex)}

# green
color2  = ${lower(p.green.hex)}
color10 = ${lower(p.bright_green.hex)}

# yellow
color3  = ${lower(p.yellow.hex)}
color11 = ${lower(p.bright_yellow.hex)}

# blue
color4  = ${lower(p.blue.hex)}
color12 = ${lower(p.bright_blue.hex)}

# magenta
color5  = ${lower(p.magenta.hex)}
color13 = ${lower(p.bright_magenta.hex)}

# cyan
color6  = ${lower(p.cyan.hex)}
color14 = ${lower(p.bright_cyan.hex)}

# white
color7  = ${lower(p.white.hex)}
color15 = ${lower(p.bright_white.hex)}
`;
