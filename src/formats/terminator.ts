import type { Palette } from "../palette.ts";
import { lower } from "../color.ts";

export const terminator = (p: Palette): string =>
  `[global_config]
  title_transmit_fg_color = "${lower(p.bright_white.hex)}"
  title_transmit_bg_color = "${lower(p.black.hex)}"
  title_inactive_fg_color = "${lower(p.bright_white.hex)}"
  title_inactive_bg_color = "${lower(p.bright_black.hex)}"
[profiles]
  [[default]]
    foreground_color = "${lower(p.bright_white.hex)}"
    background_color = "${lower(p.black.hex)}"
    cursor_color = "${lower(p.bright_yellow.hex)}"
    cursor_color_fg = False
    palette = "${lower(p.black.hex)}:${lower(p.red.hex)}:${lower(p.green.hex)}:${lower(p.yellow.hex)}:${lower(p.blue.hex)}:${lower(p.magenta.hex)}:${lower(p.cyan.hex)}:${lower(p.white.hex)}:${lower(p.bright_black.hex)}:${lower(p.bright_red.hex)}:${lower(p.bright_green.hex)}:${lower(p.bright_yellow.hex)}:${lower(p.bright_blue.hex)}:${lower(p.bright_magenta.hex)}:${lower(p.bright_cyan.hex)}:${lower(p.bright_white.hex)}"
[layouts]
  [[default]]
    [[[window0]]]
      type = Window
      parent = ""
    [[[child1]]]
      type = Terminal
      parent = window0
[plugins]
`;
