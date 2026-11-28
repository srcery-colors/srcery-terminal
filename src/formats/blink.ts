import type { Palette } from "../palette.ts";

export const blink = (p: Palette): string =>
  `// srcery_blink.js
// Colorscheme for the Blink shell: https://blink.sh

t.prefs_.set("color-palette-overrides", [
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
]);

t.prefs_.set("foreground-color", "${p.bright_white.hex}");
t.prefs_.set("background-color", "${p.black.hex}");
t.prefs_.set("cursor-color",     "${p.bright_yellow.hex}");
`;
