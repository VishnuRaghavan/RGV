#!/usr/bin/env bash

cd ~/home/ec2-user/source
pm2 stop server.js || true