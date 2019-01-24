# Mock server for [vue-storefront](https://github.com/DivanteLtd/vue-storefront)

This mock server is providing data for [vue-storefront](https://github.com/DivanteLtd/vue-storefront), just like its API does.

## Introduction

This project was created to improve `vue-storefront`'s developer experience, thanks to the data which is easily obtainable from this mock server.
Additionally you can generate your own data, effortlessly edit it or even add new properties.
Also you won't need the API running or any other source of data - simply run this server and `vue-storefront` will work as intended.

## Basics

- [yarn](https://yarnpkg.com/en/) - packages manager
- [json-server](https://github.com/typicode/json-server) - runs a server with mocked data
- [faker](https://github.com/marak/Faker.js) - provides fake data (fake product names, descriptions, etc.) **(to be added)**

## Installation

`yarn install`

## How to use?

This repo consists of a few important `.json` files:
- `./config.json` - general json-server config
- `./routes.json` - routes available on your server
- `./db.json` - file with the data which will be provided via specified routes

Once you set up everything, simply run `yarn start` and the server will start.

## Roadmap

- [x] basic json-server implementation
- [ ] add all routes - static data in db.json
- [ ] create data generators for each route - `faker` involved