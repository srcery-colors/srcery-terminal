.phony: default install

termcolors = node_modules/termcolors/bin/termcolors

default: alacritty/srcery_alacritty.yml chrome_secure_shell/srcery_chrome_secure_shell.prefs.js genode-terminal/srcery_genode-terminal.config

install:
	npm install

alacritty/srcery_alacritty.yml: palette.json
	$(termcolors) -i json -o alacritty < palette.json > $@

chrome_secure_shell/srcery_chrome_secure_shell.prefs.js: palette.json
	$(termcolors) -i json -o chromeshell < palette.json > $@

genode-terminal/srcery_genode-terminal.config: palette.json templates/genode.dot
	bin/builder -o genode > $@

gnome-terminal/srcery_gnome-terminal.sh: palette.json templates/gnome.dot
	bin/builder -o gnome > $@

guake/srcery_guake.sh: templates/guake.dot palette.json
	bin/builder -o guake > $@
