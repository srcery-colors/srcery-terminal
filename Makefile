.phony: default install

default: alacritty/srcery_alacritty.yml chrome_secure_shell/srcery_chrome_secure_shell.prefs.js genode-terminal/srcery_genode-terminal.config

install:
	npm install

alacritty/srcery_alacritty.yml:
	-mkdir alacritty
	node_modules/termcolors/bin/termcolors -i json -o alacritty < palette.json > $@

chrome_secure_shell/srcery_chrome_secure_shell.prefs.js:
	-mkdir chrome_secure_shell
	node_modules/termcolors/bin/termcolors -i json -o chromeshell < palette.json > $@

genode-terminal/srcery_genode-terminal.config:
	-mkdir genode-terminal
	bin/builder -o genode > $@

gnome-terminal/srcery_gnome-terminal.sh:
	-mkdir gnome-terminal
	node_modules/termcolors/bin/termcolors -i json -o gnome < palette.json > $@

guake/srcery_guake.sh:
	-mkdir guake
	node_modules/termcolors/bin/termcolors -i json -o guake < palette.json > $@
