import type { Palette } from "../palette.ts";
import { sub } from "../color.ts";

export const linux = (p: Palette): string =>
  String.raw`#!/bin/sh
if [ "$TERM" = "linux" ]; then
  /bin/echo -e "
  \e]P0${sub(p.black.hex)}
  \e]P1${sub(p.red.hex)}
  \e]P2${sub(p.green.hex)}
  \e]P3${sub(p.yellow.hex)}
  \e]P4${sub(p.blue.hex)}
  \e]P5${sub(p.magenta.hex)}
  \e]P6${sub(p.cyan.hex)}
  \e]P7${sub(p.white.hex)}
  \e]P8${sub(p.bright_black.hex)}
  \e]P9${sub(p.bright_red.hex)}
  \e]PA${sub(p.bright_green.hex)}
  \e]PB${sub(p.bright_yellow.hex)}
  \e]PC${sub(p.bright_blue.hex)}
  \e]PD${sub(p.bright_magenta.hex)}
  \e]PE${sub(p.bright_cyan.hex)}
  \e]PF${sub(p.bright_white.hex)}
  "
  # get rid of artifacts
  clear
fi
`;
