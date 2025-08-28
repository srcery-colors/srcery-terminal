#!/bin/bash

# Save this script into srcery_guake.sh, make this file executable and run it:
#
# $ chmod +x srcery_guake.sh
# $ ./srcery_guake.sh
#
# Alternatively copy lines below directly into your shell.

gconftool-2 -s -t string /apps/guake/style/background/color '#121211111010'
gconftool-2 -s -t string /apps/guake/style/font/color '#fcfce8e8c3c3'
gconftool-2 -s -t string /apps/guake/style/font/palette '#121211111010:#efef2f2f2727:#51519f9f5050:#fbfbb8b82929:#2c2c7878bfbf:#e0e02c2c6d6d:#0a0aaeaeb3b3:#c5c5b0b08888:#91917e7e6b6b:#f7f753534141:#9898bcbc3737:#fefed0d06e6e:#6868a8a8e4e4:#ffff5c5c8f8f:#2b2be4e4d0d0:#fcfce8e8c3c3'
