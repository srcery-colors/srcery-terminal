import type { Palette } from "../palette.ts";
import { double } from "../color.ts";

export const guake = (p: Palette): string =>
  `#!/bin/bash

# Save this script into srcery_guake.sh, make this file executable and run it:
#
# $ chmod +x srcery_guake.sh
# $ ./srcery_guake.sh
#
# Alternatively copy lines below directly into your shell.

gconftool-2 -s -t string /apps/guake/style/background/color '${double(p.black.hex)}'
gconftool-2 -s -t string /apps/guake/style/font/color '${double(p.bright_white.hex)}'
gconftool-2 -s -t string /apps/guake/style/font/palette '${double(p.black.hex)}:${double(p.red.hex)}:${double(p.green.hex)}:${double(p.yellow.hex)}:${double(p.blue.hex)}:${double(p.magenta.hex)}:${double(p.cyan.hex)}:${double(p.white.hex)}:${double(p.bright_black.hex)}:${double(p.bright_red.hex)}:${double(p.bright_green.hex)}:${double(p.bright_yellow.hex)}:${double(p.bright_blue.hex)}:${double(p.bright_magenta.hex)}:${double(p.bright_cyan.hex)}:${double(p.bright_white.hex)}'
`;
