import type { Palette } from "../palette.ts";
import { join } from "../color.ts";

export const putty = (p: Palette): string =>
  String.raw`Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\Sessions\Default%20Settings]
"Colour0"="${join(p.bright_white.rgb)}"
"Colour1"="${join(p.bright_white.rgb)}"
"Colour2"="${join(p.black.rgb)}"
"Colour3"="${join(p.black.rgb)}"
"Colour4"="${join(p.black.rgb)}"
"Colour5"="${join(p.yellow.rgb)}"
"Colour6"="${join(p.black.rgb)}"
"Colour7"="${join(p.bright_black.rgb)}"
"Colour8"="${join(p.red.rgb)}"
"Colour9"="${join(p.bright_red.rgb)}"
"Colour10"="${join(p.green.rgb)}"
"Colour11"="${join(p.bright_green.rgb)}"
"Colour12"="${join(p.yellow.rgb)}"
"Colour13"="${join(p.bright_yellow.rgb)}"
"Colour14"="${join(p.blue.rgb)}"
"Colour15"="${join(p.bright_blue.rgb)}"
"Colour16"="${join(p.magenta.rgb)}"
"Colour17"="${join(p.bright_magenta.rgb)}"
"Colour18"="${join(p.cyan.rgb)}"
"Colour19"="${join(p.bright_cyan.rgb)}"
"Colour20"="${join(p.white.rgb)}"
"Colour21"="${join(p.bright_white.rgb)}"
`;
