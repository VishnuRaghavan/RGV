#!/usr/bin/env bash
# if [ ! -z "$DEPLOYMENT_GROUP_NAME" ]; then
#  export NODE_ENV=$DEPLOYMENT_GROUP_NAME
# fi

cd ~/source
pm2 stop server.js; pm2 start server.js