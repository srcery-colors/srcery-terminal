.phony: default install list

default: \
	alacritty/srcery_alacritty.yml \
	blink/srcery_blink.js \
	chrome_secure_shell/srcery_chrome_secure_shell.prefs.js \
	genode-terminal/srcery_genode-terminal.config \
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
	terminal_app/srcery_terminal_app.terminal \
	terminator/srcery_terminator.config \
	termite/srcery_termite.ini \
	tilix/srcery_tilix.json \
	windows_terminal/srcery_settings.json \
	xfce4/srcery_xfce4.theme \
	xresources/srcery.xresources

install:
	npm install

list:
	@bin/builder --list

alacritty/srcery_alacritty.yml: templates/alacritty.dot palette.json
	bin/builder -o alacritty > $@

blink/srcery_blink.js: templates/blink.dot palette.json
	bin/builder -o blink > $@

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

lxterminal/srcery_lxterminal.conf: templates/lxterminal.dot palette.json
	bin/builder -o lxterminal > $@

mintty/srcery_mintty.conf: templates/mintty.dot palette.json
	bin/builder -o mintty > $@

pantheon-terminal/srcery_pantheon-terminal.sh: templates/pantheon.dot palette.json
	bin/builder -o pantheon > $@

putty/srcery_putty.reg: templates/putty.dot palette.json
	bin/builder -o putty > $@

st/srcery_st.h: templates/st.dot palette.json
	bin/builder -o st > $@

terminal_app/srcery_terminal_app.terminal: templates/terminal-app.dot palette.json
	bin/builder -o terminalapp > $@

terminator/srcery_terminator.config: templates/terminator.dot palette.json
	bin/builder -o terminator > $@

termite/srcery_termite.ini: templates/termite.dot palette.json
	bin/builder -o termite > $@

tilix/srcery_tilix.json: templates/tilix.dot palette.json
	bin/builder -o tilix > $@

windows_terminal/srcery_settings.json: templates/windows_terminal.dot palette.json
	bin/builder -o windowsterminal > $@

xfce4/srcery_xfce4.theme: templates/xfce.dot palette.json
	bin/builder -o xfce > $@

xresources/srcery.xresources: templates/xresources.dot palette.json
	bin/builder -o xresources > $@
