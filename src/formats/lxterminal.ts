import type { Palette } from "../palette.ts";
import { join } from "../color.ts";

export const lxterminal = (p: Palette): string =>
  `[general]
bgcolor=rgb(${join(p.black.rgb)})
color_preset=Srcery
fgcolor=rgb(${join(p.bright_white.rgb)})
palette_color_0=rgb(${join(p.black.rgb)})
palette_color_1=rgb(${join(p.red.rgb)})
palette_color_2=rgb(${join(p.green.rgb)})
palette_color_3=rgb(${join(p.yellow.rgb)})
palette_color_4=rgb(${join(p.blue.rgb)})
palette_color_5=rgb(${join(p.magenta.rgb)})
palette_color_6=rgb(${join(p.cyan.rgb)})
palette_color_7=rgb(${join(p.white.rgb)})
palette_color_8=rgb(${join(p.bright_black.rgb)})
palette_color_9=rgb(${join(p.bright_red.rgb)})
palette_color_10=rgb(${join(p.bright_green.rgb)})
palette_color_11=rgb(${join(p.bright_yellow.rgb)})
palette_color_12=rgb(${join(p.bright_blue.rgb)})
palette_color_13=rgb(${join(p.bright_magenta.rgb)})
palette_color_14=rgb(${join(p.bright_cyan.rgb)})
palette_color_15=rgb(${join(p.bright_white.rgb)})
`;
