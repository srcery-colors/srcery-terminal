import type { Palette } from "../palette.ts";
import { join } from "../color.ts";

const BT = "`";

export const readme = (p: Palette): string => {
  const rows = Object.entries(p)
    .map(
      ([name, color]) =>
        `| ![${name}](https://raw.githubusercontent.com/srcery-colors/srcery-assets/master/swatch/${name}_24.jpg) | ${name}  | ${color.index} | ${color.hex} | ${join(color.rgb, ", ")} | ${join(color.hsl, ", ")} |`,
    )
    .join("\n");

  return `<p align="center">
  <img src="https://raw.githubusercontent.com/srcery-colors/srcery-assets/master/logo/logo.svg">
</p>

<h2 align="center">Terminal configurations</h2>

<p align="center">
Pregenerated configurations using the Srcery
<a href="https://github.com/srcery-colors/srcery-palette">palette.</a>
Pick and choose for your favorite terminal emulator
</p>

## Palette

| IMG  | NAME | INDEX | HEX | RGB  | HSL |
|------|------|-------|-----|------|-----|
${rows}

## Development
### Requirements
[Node.js 26](https://nodejs.org/en/) and [pnpm 12](https://pnpm.io/) are required to build the terminal configurations.

### Changing readme

${BT}README.md${BT} along with the configs are generated, edit ${BT}src/formats/readme.ts${BT}
and run ${BT}pnpm generate${BT} to update docs.

### Generating configurations
To get a list of available configurations call ${BT}pnpm formats${BT}. By editing the
relevant renderer for any given configuration (located in ${BT}./src/formats${BT}) and
calling ${BT}pnpm generate${BT} will generate a new configuration.

To make a single config, say ${BT}xresources${BT} call generate like this:

${BT}${BT}${BT} shell
pnpm generate xresources
${BT}${BT}${BT}
`;
};
