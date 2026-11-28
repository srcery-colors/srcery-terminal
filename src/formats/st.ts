import type { Palette } from "../palette.ts";
import { lower } from "../color.ts";

export const st = (p: Palette): string =>
  `/* Terminal colors (16 first used in escape sequence) */
static const char *colorname[] = {
	/* 8 normal colors */
	"${lower(p.black.hex)}",
	"${lower(p.red.hex)}",
	"${lower(p.green.hex)}",
	"${lower(p.yellow.hex)}",
	"${lower(p.blue.hex)}",
	"${lower(p.magenta.hex)}",
	"${lower(p.cyan.hex)}",
	"${lower(p.white.hex)}",

	/* 8 bright colors */
	"${lower(p.bright_black.hex)}",
	"${lower(p.bright_red.hex)}",
	"${lower(p.bright_green.hex)}",
	"${lower(p.bright_yellow.hex)}",
	"${lower(p.bright_blue.hex)}",
	"${lower(p.bright_magenta.hex)}",
	"${lower(p.bright_cyan.hex)}",
	"${lower(p.bright_white.hex)}",

	[255] = 0,

	/* more colors can be added after 255 to use with DefaultXX */
	"${lower(p.bright_white.hex)}", /* foreground */
	"${lower(p.black.hex)}", /* background */
	"${lower(p.bright_yellow.hex)}", /* cursor */
};

/*
 * Default colors (colorname index)
 * foreground, background, cursor, reverse cursor
 */
unsigned int defaultfg = 256;
unsigned int defaultbg = 257;
unsigned int defaultcs = 258;
static unsigned int defaultrcs = 257;
`;
