<h1 align="center">
<img src="https://github.com/kthisisjosh/readme-assets/blob/master/advicetracker/AdviceLogo.png"/>
</h1>
<p align="center">
Made with MySQL, Express.js, React.js/Redux, Node.js
</p>
<p align="center">
  <a href="https://travis-ci.org/kthisisjosh/AdviceTracker">
    <img src="https://travis-ci.org/kthisisjosh/AdviceTracker.svg?branch=master" />
  </a>
  <a href="https://coveralls.io/github/kthisisjosh/AdviceTracker?branch=master">
    <img src="https://coveralls.io/repos/github/kthisisjosh/AdviceTracker/badge.svg?branch=master" />
  </a>
</p>
  
<p align="center">
  Never forget great advice again. Track, sort, and discover advice from people around the world.
</p>

View the [trello board.](https://trello.com/b/tDeajdxb)

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Showcase](#showcase)
- [Docker](#docker)
- [License](#license)

## Features
- Track & organize advice into categories/sub-categories 📚.
- Submit & share advice with others - like or comment on other advice posts to let them know what you think 🔗.
- Supported by a rich-text editor via [Tiny MCE 5](https://www.tiny.cloud/features) - format it however you like ⌨️.
- Search upon many user-submitted advice via Algolia's [InstantSearch API](https://www.algolia.com/products/instantsearch/) 🔍.
- Dark mode 🌙.
- MySQL database, server, and client served on a DigitalOcean droplet 💧.

## Showcase

Coming soon

<details>
  <summary>More Screenshots</summary>
  Coming soon
</details>

## Getting Started

#### 1. Get the latest version

Start by cloning the latest version of Advice Tracker on your local machine by running:

```sh
$ git clone https://github.com/kthisisjosh/AdviceTracker.git AdviceTracker
$ cd AdviceTracker
```

#### 2. Install the dependencies

The client is in the `app` folder and the server is in the `server` folder. You must install the dependencies in the root + these folders.

```sh
$ npm install
$ cd app && npm install
$ cd server && npm install
```

For a list of the dependencies, view:

- [Client](https://github.com/kthisisjosh/AdviceTracker/blob/master/app/README.md)
- [Server](https://github.com/kthisisjosh/AdviceTracker/blob/master/server/README.md)

#### 3. Setup the environment variables

Replace the placeholder env variables in the `.env.sample` files located in the root, app, and server folder.

#### Example
```sh
REACT_APP_GOOGLE_CLIENT_ID=<YOUR_REACT_APP_GOOGLE_CLIENT_ID>
REACT_APP_GITHUB_CLIENT_ID=<REACT_APP_GITHUB_CLIENT_ID>
REACT_APP_TINY_API_KEY=<YOUR_REACT_APP_TINY_API_KEY>
```

#### 4. Run the development servers

Go to the root of the project folder and run

```sh
$ npm run dev
```

If you want to run the client and server seperately, run

`$ npm run client` - running on [http://localhost:3000](http://localhost:3000) <br/>
`$ npm run server` - running on [http://localhost:8080](http://localhost:8080) <br/>

The client and server will 🔥 reload if any changes are made.

## Docker

This application is dockerized 🐳

`$ docker-compose build client` <br/>
`$ docker-compose build server` <br/>
`$ docker-compose build db` <br/>

When spinning up the container, make sure to include the environment variables declared in the `docker-compose.prod.yml`

#### Example

```sh
$ docker run -e ALGOLIA_API_KEY=<YOUR_ALGOLIA_API_KEY> ALGOLIA_APP_ID=<YOUR_ALGOLIA_APP_ID> -d <container>
```

## License
[MIT](https://github.com/kthisisjosh/AdviceTracker/blob/master/LICENSE)
