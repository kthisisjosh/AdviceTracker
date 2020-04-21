#!/bin/sh
set -e # Stop script from running if there are any errors

IMAGE="kthisisjosh/advicetracker"                             # Docker image
GIT_VERSION=$(git describe --always --abbrev --tags --long) # Git hash and tags

# Build and tag image in root directory
docker-compose build
docker tag advicetracker_client:latest advicetracker:client
docker tag advicetracker_server:latest advicetracker:server

# Log in to Docker Hub and push
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push advicetracker:client
docker push advicetracker:server
echo "Successfully deployed client and server to Docker Hub!"