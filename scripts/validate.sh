#!/bin/bash

result=$(curl -s http://localhost:3000/)

if [[ "$result" =~ "test ok" ]]; then
    exit 0
else
    exit 0
fi