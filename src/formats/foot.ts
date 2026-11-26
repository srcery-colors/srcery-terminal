import type { Palette } from "../palette.ts";
import { sub } from "../color.ts";

export const foot = (p: Palette): string =>
  `# https://github.com/srcery-colors/srcery-terminal/
# Special

[cursor]
color=${sub(p.black.hex)} ${sub(p.bright_yellow.hex)}

[colors]
foreground=${sub(p.bright_white.hex)}
background=${sub(p.black.hex)}

regular0=${sub(p.black.hex)}
regular1=${sub(p.red.hex)}
regular2=${sub(p.green.hex)}
regular3=${sub(p.yellow.hex)}
regular4=${sub(p.blue.hex)}
regular5=${sub(p.magenta.hex)}
regular6=${sub(p.cyan.hex)}
regular7=${sub(p.white.hex)}

bright0=${sub(p.bright_black.hex)}
bright1=${sub(p.bright_red.hex)}
bright2=${sub(p.bright_green.hex)}
bright3=${sub(p.bright_yellow.hex)}
bright4=${sub(p.bright_blue.hex)}
bright5=${sub(p.bright_magenta.hex)}
bright6=${sub(p.bright_cyan.hex)}
bright7=${sub(p.bright_white.hex)}
`;
