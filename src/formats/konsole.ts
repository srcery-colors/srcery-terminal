import type { Palette } from "../palette.ts";
import { join } from "../color.ts";

export const konsole = (p: Palette): string =>
  `# --- special colors ---

[Background]
Color=${join(p.black.rgb)}

[BackgroundIntense]
Color=${join(p.black.rgb)}

[Foreground]
Color=${join(p.bright_white.rgb)}

[ForegroundIntense]
Color=${join(p.bright_white.rgb)}
Bold=true

# --- standard colors ---

[Color0]
Color=${join(p.black.rgb)}

[Color0Intense]
Color=${join(p.bright_black.rgb)}

[Color1]
Color=${join(p.red.rgb)}

[Color1Intense]
Color=${join(p.bright_red.rgb)}

[Color2]
Color=${join(p.green.rgb)}

[Color2Intense]
Color=${join(p.bright_green.rgb)}

[Color3]
Color=${join(p.yellow.rgb)}

[Color3Intense]
Color=${join(p.bright_yellow.rgb)}

[Color4]
Color=${join(p.blue.rgb)}

[Color4Intense]
Color=${join(p.bright_blue.rgb)}

[Color5]
Color=${join(p.magenta.rgb)}

[Color5Intense]
Color=${join(p.bright_magenta.rgb)}

[Color6]
Color=${join(p.cyan.rgb)}

[Color6Intense]
Color=${join(p.bright_cyan.rgb)}

[Color7]
Color=${join(p.white.rgb)}

[Color7Intense]
Color=${join(p.bright_white.rgb)}

# --- general options ---

[General]
Description=srcery
Opacity=1
Wallpaper=
`;
