#!/usr/bin/env bash
set -e

# update instance
# sudo yum -y update
sudo apt-get update

# add nodejs to yum
curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -
# sudo yum -y install nodejs
sudo apt install nodejs
sudo apt install npm

# install pm2 module globaly
npm install -g pm2
pm2 update