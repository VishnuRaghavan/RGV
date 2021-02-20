#!/usr/bin/env bash
set -e

# install yum
sudo apt-get update -y
sudo apt-get install -y yum

# update instance
sudo yum -y update

# add nodejs to yum
curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -
sudo yum -y install nodejs

# install pm2 module globaly
npm install -g pm2
pm2 update