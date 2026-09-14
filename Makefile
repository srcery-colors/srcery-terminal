.PHONY: default list clean

FILES = alacritty/srcery_alacritty.toml \
				blink/srcery_blink.js \
				chrome_secure_shell/srcery_chrome_secure_shell.prefs.js \
				foot/foot.ini \
				genode-terminal/srcery_genode-terminal.config \
				ghostty/srcery \
				gnome-terminal/srcery_gnome-terminal.sh \
				guake/srcery_guake.sh \
				iterm/srcery_iterm.itermcolors \
				kitty/srcery_kitty.conf \
				konsole/srcery_konsole.colorscheme \
				linux_vc/srcery_linux_vc.sh \
				lxterminal/srcery_lxterminal.conf \
				mintty/srcery_mintty.conf \
				pantheon-terminal/srcery_pantheon-terminal.sh \
				putty/srcery_putty.reg \
				st/srcery_st.h \
				terminator/srcery_terminator.config \
				termite/srcery_termite.ini \
				termux/srcery_colors.properties \
				tilix/srcery_tilix.json \
				windows_terminal/srcery_settings.json \
				xfce4/srcery_xfce4.theme \
				xresources/srcery.xresources \
				README.md

PALETTE = node_modules/@srcery-colors/srcery-palette/palette.json

default: $(FILES)

clean:
	rm -f $(FILES)

list:
	@bin/builder.js --list

$(PALETTE):
	pnpm install

README.md: templates/README.hbs $(PALETTE)
	@bin/builder.js -o md > $@

alacritty/srcery_alacritty.toml: templates/alacritty.hbs $(PALETTE)
	bin/builder.js -o alacritty > $@

blink/srcery_blink.js: templates/blink.hbs $(PALETTE)
	bin/builder.js -o blink > $@

chrome_secure_shell/srcery_chrome_secure_shell.prefs.js: templates/chrome-secure-shell.hbs $(PALETTE)
	bin/builder.js -o chromeshell > $@

foot/foot.ini: templates/foot.hbs $(PALETTE)
	bin/builder.js -o foot > $@

genode-terminal/srcery_genode-terminal.config: templates/genode.hbs $(PALETTE)
	bin/builder.js -o genode > $@

ghostty/srcery: templates/ghostty.hbs $(PALETTE)
	bin/builder.js -o ghostty > $@

gnome-terminal/srcery_gnome-terminal.sh: templates/gnome.hbs $(PALETTE)
	bin/builder.js -o gnome > $@

guake/srcery_guake.sh: templates/guake.hbs $(PALETTE)
	bin/builder.js -o guake > $@

iterm/srcery_iterm.itermcolors: templates/iterm.hbs $(PALETTE)
	bin/builder.js -o iterm > $@

kitty/srcery_kitty.conf: templates/kitty.hbs $(PALETTE)
	bin/builder.js -o kitty > $@

konsole/srcery_konsole.colorscheme: templates/konsole.hbs $(PALETTE)
	bin/builder.js -o konsole > $@

linux_vc/srcery_linux_vc.sh: templates/linux.hbs $(PALETTE)
	bin/builder.js -o linux > $@

lxterminal/srcery_lxterminal.conf: templates/lxterminal.hbs $(PALETTE)
	bin/builder.js -o lxterminal > $@

mintty/srcery_mintty.conf: templates/mintty.hbs $(PALETTE)
	bin/builder.js -o mintty > $@

pantheon-terminal/srcery_pantheon-terminal.sh: templates/pantheon.hbs $(PALETTE)
	bin/builder.js -o pantheon > $@

putty/srcery_putty.reg: templates/putty.hbs $(PALETTE)
	bin/builder.js -o putty > $@

st/srcery_st.h: templates/st.hbs $(PALETTE)
	bin/builder.js -o st > $@

terminator/srcery_terminator.config: templates/terminator.hbs $(PALETTE)
	bin/builder.js -o terminator > $@

termite/srcery_termite.ini: templates/termite.hbs $(PALETTE)
	bin/builder.js -o termite > $@

termux/srcery_colors.properties: templates/termux.hbs $(PALETTE)
	bin/builder.js -o termux > $@

tilix/srcery_tilix.json: templates/tilix.hbs $(PALETTE)
	bin/builder.js -o tilix > $@

windows_terminal/srcery_settings.json: templates/windows_terminal.hbs $(PALETTE)
	bin/builder.js -o windowsterminal > $@

xfce4/srcery_xfce4.theme: templates/xfce.hbs $(PALETTE)
	bin/builder.js -o xfce > $@

xresources/srcery.xresources: templates/xresources.hbs $(PALETTE)
	bin/builder.js -o xresources > $@
