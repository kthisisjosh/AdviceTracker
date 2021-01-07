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
</p>
  
<p align="center">
  Never forget great advice again. Track, sort, and discover advice from people around the world.
</p>

## Table of Contents
- [Features](#features)
- [Showcase](#showcase)
- [Getting Started](#getting-started)
- [Docker](#docker)
- [Support](#support-)
- [License](#license)

## Features
- Track & organize advice into categories/sub-categories 📚.
- Submit & share advice with people around the world 🔗.
- Supported by a rich-text editor via [Tiny MCE 5](https://www.tiny.cloud/features) - format it however you like ⌨️.
- Search upon many user-submitted advice via Algolia's [InstantSearch API](https://www.algolia.com/products/instantsearch/) 🔍.
- Dark theme 🌙.
- MySQL database, server, and client served on a DigitalOcean droplet 💧.

### Future Updates
- Implement a like & comment system.

View the [trello board.](https://trello.com/b/tDeajdxb)

## Showcase

![Showcase](https://github.com/kthisisjosh/readme-assets/blob/master/advicetracker/Showcase.gif)

<details>
  <summary>More Screenshots</summary>
  
  Landing Page
  <img src="https://github.com/kthisisjosh/readme-assets/blob/master/advicetracker/Landing.JPG"/>
  
  Dashboard Page
  <img src="https://github.com/kthisisjosh/readme-assets/blob/master/advicetracker/Dashboard.JPG"/>
  
  Category Page
  <img src="https://github.com/kthisisjosh/readme-assets/blob/master/advicetracker/Category.JPG"/>
  
  Browse Page
  <img src="https://github.com/kthisisjosh/readme-assets/blob/master/advicetracker/Browse.JPG"/>
  
  Profile Page
  <img src="https://github.com/kthisisjosh/readme-assets/blob/master/advicetracker/Profile.JPG"/>
  
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

When spinning up the containers, make sure to include the all environment variables declared in the `docker-compose.prod.yml`.

#### Example

```sh
$ docker run -e ALGOLIA_API_KEY=<YOUR_ALGOLIA_API_KEY> ALGOLIA_APP_ID=<YOUR_ALGOLIA_APP_ID> -d <container>
```

## Support ⭐
If you like the project, please star the repo.

## License
[MIT](https://github.com/kthisisjosh/AdviceTracker/blob/master/LICENSE)
