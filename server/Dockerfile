# pull official base image
FROM node:13.13.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add server
COPY . ./

# start app
CMD ["npm", "run", "dev"]