#!/bin/sh
if [ "$TERM" = "linux" ]; then
  /bin/echo -e "
  \e]P0121110
  \e]P1ef2f27
  \e]P2519f50
  \e]P3fbb829
  \e]P42c78bf
  \e]P5e02c6d
  \e]P60aaeb3
  \e]P7c5b088
  \e]P8917e6b
  \e]P9f75341
  \e]PA98bc37
  \e]PBfed06e
  \e]PC68a8e4
  \e]PDff5c8f
  \e]PE2be4d0
  \e]PFfce8c3
  "
  # get rid of artifacts
  clear
fi
