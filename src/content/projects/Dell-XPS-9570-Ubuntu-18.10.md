---
title: 'Dell XPS-9570 Ubuntu 18.10'
description: 'Dell XPS-9570 Ubuntu 18.10'
pubDate: 'Jul 21 2023'
---

Script to tweak Ubuntu 18.10 run smooth on Dell XPS 15 9570. 🔧 💻

![DELL XPS 9570](https://raw.githubusercontent.com/stylianosnicoletti/Dell-XPS-9570-Ubuntu-18.10/master/xps_pic.png)

All information taken from:

- [tomwwright gist for DELL XPS 15 9560](https://gist.github.com/tomwwright/f88e2ddb344cf99f299935e1312da880)
- [Atheros wifi card fix](https://ubuntuforums.org/showthread.php?t=2323812&page=2)
- [Respin script and info](http://linuxiumcomau.blogspot.com/)
- [dell-xps-9570-ubuntu-respin](https://github.com/JackHack96/dell-xps-9570-ubuntu-respin)

### What Works

 - ✔️ Wifi
 - ✔️ Audio
 - ✔️ HDMI
 - ✔️ Camera
 - ✔️ Touch screen
 - ✔️ Nvidia/Intel graphic cards switch
 - ✔️ Keyboard backlight
 - ✔️ Display brightness
 - ✔️ Sleep/wake

### What Doesn't Work

 - ❌ Fingerprint sensor

### Step 1: Download and install Ubuntu 18.10 
https://www.ubuntu.com/download/desktop

### Step 2: Run the script
After installation is fully complete. Open a terminal, go into the script's folder and run the following commands:
```shell
chmod +x xps_9570_ubuntu_tweak.sh
```
```shell
sudo ./xps_9570_ubuntu_tweak.sh
```
Reboot your machine 😎


