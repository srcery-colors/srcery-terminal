import type { Palette } from "../palette.ts";
import { alacritty } from "./alacritty.ts";
import { blink } from "./blink.ts";
import { chromeSecureShell } from "./chrome-secure-shell.ts";
import { foot } from "./foot.ts";
import { genode } from "./genode.ts";
import { ghostty } from "./ghostty.ts";
import { gnome } from "./gnome.ts";
import { guake } from "./guake.ts";
import { iterm } from "./iterm.ts";
import { kitty } from "./kitty.ts";
import { konsole } from "./konsole.ts";
import { linux } from "./linux.ts";
import { lxterminal } from "./lxterminal.ts";
import { mintty } from "./mintty.ts";
import { pantheon } from "./pantheon.ts";
import { putty } from "./putty.ts";
import { readme } from "./readme.ts";
import { st } from "./st.ts";
import { terminator } from "./terminator.ts";
import { termite } from "./termite.ts";
import { termux } from "./termux.ts";
import { tilix } from "./tilix.ts";
import { windowsTerminal } from "./windows-terminal.ts";
import { xfce } from "./xfce.ts";
import { xresources } from "./xresources.ts";

export interface Format {
  output: string;
  render: (p: Palette) => string;
}

export const formats = {
  alacritty: { output: "alacritty/srcery_alacritty.toml", render: alacritty },
  blink: { output: "blink/srcery_blink.js", render: blink },
  chromeshell: {
    output: "chrome_secure_shell/srcery_chrome_secure_shell.prefs.js",
    render: chromeSecureShell,
  },
  foot: { output: "foot/foot.ini", render: foot },
  genode: {
    output: "genode-terminal/srcery_genode-terminal.config",
    render: genode,
  },
  ghostty: { output: "ghostty/srcery", render: ghostty },
  gnome: {
    output: "gnome-terminal/srcery_gnome-terminal.sh",
    render: gnome,
  },
  guake: { output: "guake/srcery_guake.sh", render: guake },
  iterm: { output: "iterm/srcery_iterm.itermcolors", render: iterm },
  kitty: { output: "kitty/srcery_kitty.conf", render: kitty },
  konsole: { output: "konsole/srcery_konsole.colorscheme", render: konsole },
  linux: { output: "linux_vc/srcery_linux_vc.sh", render: linux },
  lxterminal: { output: "lxterminal/srcery_lxterminal.conf", render: lxterminal },
  mintty: { output: "mintty/srcery_mintty.conf", render: mintty },
  pantheon: {
    output: "pantheon-terminal/srcery_pantheon-terminal.sh",
    render: pantheon,
  },
  putty: { output: "putty/srcery_putty.reg", render: putty },
  st: { output: "st/srcery_st.h", render: st },
  terminator: {
    output: "terminator/srcery_terminator.config",
    render: terminator,
  },
  termite: { output: "termite/srcery_termite.ini", render: termite },
  termux: { output: "termux/srcery_colors.properties", render: termux },
  tilix: { output: "tilix/srcery_tilix.json", render: tilix },
  windowsterminal: {
    output: "windows_terminal/srcery_settings.json",
    render: windowsTerminal,
  },
  xfce: { output: "xfce4/srcery_xfce4.theme", render: xfce },
  xresources: { output: "xresources/srcery.xresources", render: xresources },
  md: { output: "README.md", render: readme },
} satisfies Record<string, Format>;

export type FormatName = keyof typeof formats;

export function isFormatName(name: string): name is FormatName {
  return Object.hasOwn(formats, name);
}
