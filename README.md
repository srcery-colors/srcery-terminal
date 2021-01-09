![title](https://raw.githubusercontent.com/srcery-colors/srcery-assets/master/terminal_title.png)

Terminal configurations for [vim](https://github.com/srcery-colors/srcery-vim), and [emacs](https://github.com/srcery-colors/srcery-emacs) color scheme. Pick and choose for your terminal of choice for the pre-generated configs tracked in this repo.

## Palette

| TERMCOL        | NR | HEX     | RGB           | IMG                                                          |
|----------------|----|---------|---------------|--------------------------------------------------------------|
| black          | 0  | #1C1B19 | 28,  27,  25  | ![black](https://placehold.it/100x24/1C1B19?text=+)          |
| red            | 1  | #EF2F27 | 239, 47, 39   | ![red](https://placehold.it/100x24/EF2F27?text=+)            |
| green          | 2  | #519F50 | 81,  159, 80  | ![green](https://placehold.it/100x24/519F50?text=+)          |
| yellow         | 3  | #FBB829 | 251, 184, 41  | ![yellow](https://placehold.it/100x24/FBB829?text=+)         |
| blue           | 4  | #2C78BF | 44, 120, 191  | ![blue](https://placehold.it/100x24/2C78BF?text=+)           |
| magenta        | 5  | #E02C6D | 224, 44,  109 | ![magenta](https://placehold.it/100x24/E02C6D?text=+)        |
| cyan           | 6  | #0AAEB3 | 10, 174, 179  | ![cyan](https://placehold.it/100x24/0AAEB3?text=+)           |
| white          | 7  | #D0BFA1 | 208, 191, 161 | ![white](https://placehold.it/100x24/D0BFA1?text=+)          |
| brightblack    | 8  | #918175 | 145, 129, 117 | ![bright_black](https://placehold.it/100x24/918175?text=+)   |
| brightred      | 9  | #F75341 | 247, 83, 65   | ![bright_red](https://placehold.it/100x24/F75341?text=+)     |
| brightgreen    | 10 | #98BC37 | 152, 188, 55  | ![bright_green](https://placehold.it/100x24/98BC37?text=+)   |
| brightyellow   | 11 | #FED06E | 254, 208, 110 | ![bright_yellow](https://placehold.it/100x24/FED06E?text=+)  |
| brightblue     | 12 | #68A8E4 | 104, 168, 228 | ![bright_blue](https://placehold.it/100x24/68A8E4?text=+)    |
| brightmagenta  | 13 | #FF5C8F | 255, 92, 143  | ![bright_magenta](https://placehold.it/100x24/FF5C8F?text=+) |
| brightcyan     | 14 | #53FDE9 | 83, 253, 233  | ![bright_cyan](https://placehold.it/100x24/53FDE9?text=+)    |
| brightwhite    | 15 | #FCE8C3 | 252, 232, 195 | ![bright_white](https://placehold.it/100x24/FCE8C3?text=+)   |

Additionally Srcery uses some [xterm 256
colors](https://en.wikipedia.org/wiki/Xterm#/media/File:Xterm_256color_chart.svg)
to pad out the color selection, no extra configuration needed.

| NAME          | NR  | HEX     | RGB         | IMG                                                         |
|---------------|-----|---------|-------------|-------------------------------------------------------------|
| orange        | 202 | #FF5F00 | 255, 95, 0  | ![orange](https://placehold.it/100x24/FF5F00?text=+)        |
| bright_orange | 208 | #FF8700 | 255, 135, 0 | ![bright_orange](https://placehold.it/100x24/FF8700?text=+) |
| hard_black    | 233 | #121212 | 18, 18, 18  | ![hard_black](https://placehold.it/100x24/121212?text=+)    |
| xgray1        | 235 | #262626 | 38, 38, 38  | ![xgray1](https://placehold.it/100x24/262626?text=+)        |
| xgray2        | 236 | #303030 | 48, 48, 48  | ![xgray2](https://placehold.it/100x24/303030?text=+)        |
| xgray3        | 237 | #3A3A3A | 58, 58, 58  | ![xgray3](https://placehold.it/100x24/3A3A3A?text=+)        |
| xgray4        | 238 | #444444 | 68, 68, 68  | ![xgray4](https://placehold.it/100x24/444444?text=+)        |
| xgray5        | 239 | #4E4E4E | 78, 78, 78  | ![xgray5](https://placehold.it/100x24/4E4E4E?text=+)        |
| xgray6        | 240 | #585858 | 88, 88, 88  | ![xgray6](https://placehold.it/100x24/585858?text=+)        |

## Development
### Requirements
[Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) is required to build the terminal configurations.

### Installing
Clone this repository and run `make install`, this will install the required packages via [npm](https://www.npmjs.com/) locally.

### Generating configurations
To get a list of available configurations call `make list`. By editing
the relevant template for any given configuration (located in
`./templates`), or by editing `palette.json` and calling `make` will
generate a new configuration.

To make a single config, say `xresources` call make like this:

``` shell
make xresources/srcery.xresources
```
Keep in mind that if the template or palette has not been changed nothing will get generated.
