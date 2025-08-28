/* Terminal colors (16 first used in escape sequence) */
static const char *colorname[] = {
	/* 8 normal colors */
	"#121110",
	"#ef2f27",
	"#519f50",
	"#fbb829",
	"#2c78bf",
	"#e02c6d",
	"#0aaeb3",
	"#c5b088",

	/* 8 bright colors */
	"#917e6b",
	"#f75341",
	"#98bc37",
	"#fed06e",
	"#68a8e4",
	"#ff5c8f",
	"#2be4d0",
	"#fce8c3",

	[255] = 0,

	/* more colors can be added after 255 to use with DefaultXX */
	"#fce8c3", /* foreground */
	"#121110", /* background */
	"#fbb829", /* cursor */
};

/*
 * Default colors (colorname index)
 * foreground, background, cursor, reverse cursor
 */
unsigned int defaultfg = 256;
unsigned int defaultbg = 257;
unsigned int defaultcs = 258;
static unsigned int defaultrcs = 257;
