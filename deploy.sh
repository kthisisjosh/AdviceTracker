#!/bin/sh
set -e # Stop script from running if there are any errors

IMAGE="kthisisjosh/advicetracker"                             # Docker image
GIT_VERSION=$(git describe --always --abbrev --tags --long) # Git hash and tags

# Build and tag image
ls
docker-compose build
docker images
