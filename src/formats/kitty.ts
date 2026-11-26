import type { Palette } from "../palette.ts";
import { lower } from "../color.ts";

export const kitty = (p: Palette): string =>
  `# vim:ft=kitty

## name: srcery
## author: Daniel Berg
## license: MIT
## upstream: https://github.com/srcery-colors/srcery-terminal/
## blurb: Srcery is a color scheme with clearly defined contrasting colors and
## a slightly earthy tone.

#: The basic colors

foreground                      ${lower(p.bright_white.hex)}
background                      ${lower(p.black.hex)}
selection_foreground            none
selection_background            none


#: Cursor colors

cursor                          ${lower(p.bright_yellow.hex)}
cursor_text_color               background


#: The basic 16 colors

#: black
color0 ${lower(p.black.hex)}
color8 ${lower(p.bright_black.hex)}

#: red
color1 ${lower(p.red.hex)}
color9 ${lower(p.bright_red.hex)}

#: green
color2  ${lower(p.green.hex)}
color10 ${lower(p.bright_green.hex)}

#: yellow
color3  ${lower(p.yellow.hex)}
color11 ${lower(p.bright_yellow.hex)}

#: blue
color4  ${lower(p.blue.hex)}
color12 ${lower(p.bright_blue.hex)}

#: magenta
color5  ${lower(p.magenta.hex)}
color13 ${lower(p.bright_magenta.hex)}

#: cyan
color6  ${lower(p.cyan.hex)}
color14 ${lower(p.bright_cyan.hex)}

#: white
color7  ${lower(p.white.hex)}
color15 ${lower(p.bright_white.hex)}

#: Tab bar colors

tab_bar_background              ${lower(p.gray1.hex)}
tab_bar_margin_color            ${lower(p.black.hex)}
active_tab_background           ${lower(p.gray4.hex)}
active_tab_foreground           ${lower(p.bright_white.hex)}
inactive_tab_background         ${lower(p.gray2.hex)}
inactive_tab_foreground         ${lower(p.bright_black.hex)}
`;
