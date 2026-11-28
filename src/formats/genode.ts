import type { Palette } from "../palette.ts";

export const genode = (p: Palette): string =>
  `<config initial_columns="120" initial_rows="36">
  <!-- srcery color scheme -->
  <color index="0x0" bg="${p.black.hex}"/>
  <color index="0x1" bg="${p.red.hex}"/>
  <color index="0x2" bg="${p.green.hex}"/>
  <color index="0x3" bg="${p.yellow.hex}"/>
  <color index="0x4" bg="${p.blue.hex}"/>
  <color index="0x5" bg="${p.magenta.hex}"/>
  <color index="0x6" bg="${p.cyan.hex}"/>
  <color index="0x7" bg="${p.white.hex}"/>
  <color index="0x8" bg="${p.bright_black.hex}"/>
  <color index="0x9" bg="${p.bright_red.hex}"/>
  <color index="0xa" bg="${p.bright_green.hex}"/>
  <color index="0xb" bg="${p.bright_yellow.hex}"/>
  <color index="0xc" bg="${p.bright_blue.hex}"/>
  <color index="0xd" bg="${p.bright_magenta.hex}"/>
  <color index="0xe" bg="${p.bright_cyan.hex}"/>
  <color index="0xf" bg="${p.bright_white.hex}"/>
  <vfs> <dir name="fonts"> <fs label="fonts"/> </dir> </vfs>
</config>
`;
