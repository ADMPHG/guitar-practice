#!/usr/bin/bash
#
tmux new-session -s guitar 'vite' \; \
 split-window \; \
 send-keys "cd ../backend" C-m \; \
 send-keys "fastapi run main.py" C-m \; \
 split-window \; \
 select-layout tiled \; \
 send-keys "cd .." C-m \;