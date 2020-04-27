#!/bin/sh
set -xe # Stop script from running if there are any errors

IMAGE="kthisisjosh/advicetracker" # Docker image
GIT_VERSION=$(git describe --always --abbrev --tags --long) # Git hash and tags

# Build and tag image in root directory
docker-compose -f docker-compose.prod.yml build --build-arg REACT_APP_GOOGLE_CLIENT_ID=$REACT_APP_GOOGLE_CLIENT_ID --build-arg REACT_APP_GITHUB_CLIENT_ID=$REACT_APP_GITHUB_CLIENT_ID --build-arg REACT_APP_TINY_API_KEY=$REACT_APP_TINY_API_KEY
docker tag advicetracker_client:latest kthisisjosh/advicetracker:client
docker tag advicetracker_server:latest kthisisjosh/advicetracker:server

# Log in to Docker Hub and push
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push kthisisjosh/advicetracker:client
docker push kthisisjosh/advicetracker:server
echo "Successfully deployed client and server to Docker Hub!"

# copy ssh key into build server
#eval "$(ssh-agent -s)"
#ssh-add ~/.ssh/id_rsa
#
#sudo docker stop advicetracker-client
#sudo docker stop advicetracker-se
#sudo docker rm advicetracker_client
#sudo docker rm advicetracker_se
#sudo docker run --name=advicetracker-client -e REACT_APP_GOOGLE_CLIENT_ID=${REACT_APP_GOOGLE_CLIENT_ID} -e REACT_APP_GITHUB_CLIENT_ID=${REACT_APP_GITHUB_CLIENT_ID} -e REACT_APP_TINY_API_KEY=${REACT_APP_TINY_API_KEY} --restart unless-stopped -i -p 3000:3000 kthisisjosh/advicetracker:cl
#sudo docker run --name=advicetracker-server -e MYSQL_HOST=${MYSQL_HOST} -e MYSQL_USER=${MYSQL_ROOT} -e MYSQL_PASSWORD=${MYSQL_PASSWORD} -e MYSQL_DATABASE=${MYSQL_DATABASE} --restart unless-stopped -d -p 8080:8080 kthisisjosh/advicetracker:se
#sudo docker system prune -a -f
#
#fi