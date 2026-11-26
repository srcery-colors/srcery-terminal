import type { Palette } from "../palette.ts";

export const windowsTerminal = (p: Palette): string =>
  `{
  "profiles": {
    "defaults": {
      "colorScheme": "Srcery"
    }
  },
  "schemes": [
    {
      "name": "Srcery",
      "black": "${p.black.hex}",
      "red": "${p.red.hex}",
      "green": "${p.green.hex}",
      "yellow": "${p.yellow.hex}",
      "blue": "${p.blue.hex}",
      "purple": "${p.magenta.hex}",
      "cyan": "${p.cyan.hex}",
      "white": "${p.white.hex}",
      "brightBlack": "${p.bright_black.hex}",
      "brightRed": "${p.bright_red.hex}",
      "brightGreen": "${p.bright_green.hex}",
      "brightYellow": "${p.bright_yellow.hex}",
      "brightBlue": "${p.bright_blue.hex}",
      "brightPurple": "${p.bright_magenta.hex}",
      "brightCyan": "${p.bright_cyan.hex}",
      "brightWhite": "${p.bright_white.hex}",
      "foreground": "${p.bright_white.hex}",
      "background": "${p.black.hex}",
      "cursorColor": "${p.bright_yellow.hex}",
      "selectionBackground": "${p.bright_white.hex}"
    }
  ]
}
`;
