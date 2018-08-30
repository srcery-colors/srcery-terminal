#!/usr/bin/env bash

# Background opacity. Decimal from 0.0 to 1.0
opacity=${opacity:-0.95}

background="rgba(28,27,25,${opacity})"
foreground="#fce8c3"
cursor="#68a8e4"

dconf load /org/pantheon/terminal/settings/ <<COLORS
[/]
name='srcery'
cursor-color='${cursor}'
foreground='${foreground}'
background='${background}'
palette='#1c1b19:#ef2f27:#519f50:#fbb829:#2c78bf:#e02c6d:#0aaeb3:#918175:#2d2c29:#f75341:#98bc37:#fed06e:#68a8e4:#ff5c8f:#53fde9:#fce8c3'
COLORS
