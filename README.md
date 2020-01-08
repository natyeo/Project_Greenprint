<img src="./docs/_imgs/leaf.png" align="right" />

# Project Greenprint backend API
[![Build Status](https://travis-ci.org/natyeo/Project_Greenprint_Backend.svg?branch=master)](https://travis-ci.org/natyeo/Project_Greenprint_Backend)
![Planet needs saving](https://img.shields.io/badge/planet-needs%20saving-green)

---

# API docs

Each of these API endpoints are illustrated by a curl command you can use and test with in your terminal. 

API hosted at 
```
http://project-greenprint-backend.herokuapp.com/
```

## Journey

**POST** ```/```

```bash
curl http://project-greenprint-backend.herokuapp.com/
```

Post request has to contain query parameters in the body of the request formatted as JSON. It must be in the following format:

```
{
    "from": "_starting_point_",
    "to": "_destination_"
}
```

On success, the above will return the data back formatted in JSON:

```
{
    "from": "_starting_point_",
    "to": "_destination_"
}

```

## API local usage

API runs with the following technologies:

  * [Node JS](https://nodejs.org/en/)
  * [Express JS](https://expressjs.com/)

API tested with the following frameworks:

  * [Jest](https://jestjs.io/)
  * [Supertest](https://github.com/visionmedia/supertest)

  
### Setup

API runs with version ```13.5.0``` of Node JS. Check node [documentation](https://nodejs.org/en/download/) for installation instructions.

Clone repository. Once inside the root folder run the following command to install dependencies.

```bash
npm install
```

To run server locally, type ``` npm server.js ```.

Application will run on ```localhost:5678```

### Testing

To run tests, navigate to root folder and run command

```bash
npm test
```
