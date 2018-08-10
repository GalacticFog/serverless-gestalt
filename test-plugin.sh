#!/bin/bash

# clear out previous driver / test-run
rm -rf driver
npm i
npm link serverless-gestalt

mkdir -p driver/
cd driver

# Install Node.js driver/template
serverless install --url \
  https://github.com/GalacticFog/serverless-gestalt-hello-world \
  --name gestalt-hello-world
  
cd gestalt-hello-world

# Run the workflow

export SLS_DEBUG=""

echo package
serverless package
echo package done
serverless deploy

SLS_DEBUG=""
echo "Sleep for 10"
sleep 10

serverless invoke -f hello-world

serverless deploy function -f hello-world

sleep 10

serverless deploy list

serverless invoke -f hello-world

# Comment out to leave in place.
serverless remove

# cd .. && rm -rf driver/gestalt-hello-world

