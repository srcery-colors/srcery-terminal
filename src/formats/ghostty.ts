import type { Palette } from "../palette.ts";
import { lower } from "../color.ts";

export const ghostty = (p: Palette): string =>
  `# https://github.com/srcery-colors/srcery-terminal/
cursor-color = ${lower(p.bright_yellow.hex)}
foreground = ${lower(p.bright_white.hex)}
background = ${lower(p.black.hex)}
selection-foreground = ${lower(p.black.hex)}
selection-background = ${lower(p.bright_white.hex)}

palette = 0=${lower(p.black.hex)}
palette = 1=${lower(p.red.hex)}
palette = 2=${lower(p.green.hex)}
palette = 3=${lower(p.yellow.hex)}
palette = 4=${lower(p.blue.hex)}
palette = 5=${lower(p.magenta.hex)}
palette = 6=${lower(p.cyan.hex)}
palette = 7=${lower(p.white.hex)}
palette = 8=${lower(p.bright_black.hex)}
palette = 9=${lower(p.bright_red.hex)}
palette = 10=${lower(p.bright_green.hex)}
palette = 11=${lower(p.bright_yellow.hex)}
palette = 12=${lower(p.bright_blue.hex)}
palette = 13=${lower(p.bright_magenta.hex)}
palette = 14=${lower(p.bright_cyan.hex)}
palette = 15=${lower(p.bright_white.hex)}
`;
