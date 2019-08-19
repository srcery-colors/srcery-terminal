.phony: default install

termcolors = node_modules/termcolors/bin/termcolors

default: alacritty/srcery_alacritty.yml chrome_secure_shell/srcery_chrome_secure_shell.prefs.js genode-terminal/srcery_genode-terminal.config

install:
	npm install

list:
	@bin/builder --list

alacritty/srcery_alacritty.yml: templates/alacritty.dot palette.json
	bin/builder -o alacritty > $@

chrome_secure_shell/srcery_chrome_secure_shell.prefs.js: templates/chrome-secure-shell.dot palette.json
	bin/builder -o chromeshell > $@

genode-terminal/srcery_genode-terminal.config: palette.json templates/genode.dot
	bin/builder -o genode > $@

gnome-terminal/srcery_gnome-terminal.sh: palette.json templates/gnome.dot
	bin/builder -o gnome > $@

guake/srcery_guake.sh: templates/guake.dot palette.json
	bin/builder -o guake > $@

iterm/srcery_iterm.itermcolors: templates/iterm.dot palette.json
	bin/builder -o iterm > $@

kitty/srcery_kitty.conf: templates/kitty.dot palette.json
	bin/builder -o kitty > $@

konsole/srcery_konsole.colorscheme: templates/konsole.dot palette.json
	bin/builder -o konsole > $@

linux_vc/srcery_linux_vc.sh: templates/linux.dot palette.json
	bin/builder -o linux > $@

mintty/srcery_mintty.conf: templates/mintty.dot palette.json
	bin/builder -o mintty > $@
