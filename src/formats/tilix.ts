import type { Palette } from "../palette.ts";

export const tilix = (p: Palette): string =>
  `{
  "background-color": "${p.black.hex}",
  "badge-color": "${p.blue.hex}",
  "bold-color": "#FFFFFF",
  "comment": "Color scheme with clearly defined contrasting colors and a slightly earthy tone.",
  "cursor-background-color": "${p.bright_yellow.hex}",
  "cursor-foreground-color": "${p.black.hex}",
  "foreground-color": "${p.bright_white.hex}",
  "highlight-background-color": "#000000",
  "highlight-foreground-color": "#FFFFFF",
  "name": "srcery",
  "palette": [
    "${p.black.hex}",
    "${p.red.hex}",
    "${p.green.hex}",
    "${p.yellow.hex}",
    "${p.blue.hex}",
    "${p.magenta.hex}",
    "${p.cyan.hex}",
    "${p.white.hex}",
    "${p.bright_black.hex}",
    "${p.bright_red.hex}",
    "${p.bright_green.hex}",
    "${p.bright_yellow.hex}",
    "${p.bright_blue.hex}",
    "${p.bright_magenta.hex}",
    "${p.bright_cyan.hex}",
    "${p.bright_white.hex}"
  ],
  "use-badge-color": false,
  "use-bold-color": false,
  "use-cursor-color": true,
  "use-highlight-color": false,
  "use-theme-colors": false
}
`;
