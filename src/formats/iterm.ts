import type { Palette } from "../palette.ts";
import { avgRGB } from "../color.ts";

export const iterm = (p: Palette): string =>
  `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Ansi 0 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.black.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.black.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.black.rgb[0])}</real>
	</dict>
	<key>Ansi 1 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.red.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.red.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.red.rgb[0])}</real>
	</dict>
	<key>Ansi 10 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_green.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_green.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_green.rgb[0])}</real>
	</dict>
	<key>Ansi 11 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_yellow.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_yellow.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_yellow.rgb[0])}</real>
	</dict>
	<key>Ansi 12 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_blue.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_blue.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_blue.rgb[0])}</real>
	</dict>
	<key>Ansi 13 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_magenta.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_magenta.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_magenta.rgb[0])}</real>
	</dict>
	<key>Ansi 14 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_cyan.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_cyan.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_cyan.rgb[0])}</real>
	</dict>
	<key>Ansi 15 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_white.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_white.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_white.rgb[0])}</real>
	</dict>
	<key>Ansi 2 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.green.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.green.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.green.rgb[0])}</real>
	</dict>
	<key>Ansi 3 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.yellow.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.yellow.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.yellow.rgb[0])}</real>
	</dict>
	<key>Ansi 4 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.blue.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.blue.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.blue.rgb[0])}</real>
	</dict>
	<key>Ansi 5 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.magenta.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.magenta.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.magenta.rgb[0])}</real>
	</dict>
	<key>Ansi 6 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.cyan.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.cyan.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.cyan.rgb[0])}</real>
	</dict>
	<key>Ansi 7 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.white.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.white.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.white.rgb[0])}</real>
	</dict>
	<key>Ansi 8 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_black.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_black.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_black.rgb[0])}</real>
	</dict>
	<key>Ansi 9 Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_red.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_red.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_red.rgb[0])}</real>
	</dict>
	<key>Background Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.black.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.black.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.black.rgb[0])}</real>
	</dict>
	<key>Bold Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_white.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_white.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_white.rgb[0])}</real>
	</dict>
	<key>Cursor Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_yellow.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_yellow.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_yellow.rgb[0])}</real>
	</dict>
	<key>Cursor Text Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.black.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.black.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.black.rgb[0])}</real>
	</dict>
	<key>Foreground Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_white.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_white.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_white.rgb[0])}</real>
	</dict>
	<key>Selected Text Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.black.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.black.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.black.rgb[0])}</real>
	</dict>
	<key>Selection Color</key>
	<dict>
		<key>Color Space</key>
		<string>sRGB</string>
		<key>Blue Component</key>
		<real>${avgRGB(p.bright_white.rgb[2])}</real>
		<key>Green Component</key>
		<real>${avgRGB(p.bright_white.rgb[1])}</real>
		<key>Red Component</key>
		<real>${avgRGB(p.bright_white.rgb[0])}</real>
	</dict>
</dict>
</plist>
`;
