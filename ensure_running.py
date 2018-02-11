#!/usr/bin/python

import os, time, subprocess

while True:
    time.sleep(30)
    py_procs = subprocess.check_output(['ps', '-ax'])
    if 'auto_mode.py' not in py_procs:
        os.system('/home/pi/control_panel/auto_mode.py&')
