#!/usr/bin/env bash
set -e

echo hellohellohellohellohellohelloheloooo
# update instance
yum -y update

# add nodejs to yum
curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -
yum -y install nodejs

# install pm2 module globaly
npm install -g pm2
pm2 update