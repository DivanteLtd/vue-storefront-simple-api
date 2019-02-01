# Minimalistic API server for [vue-storefront](https://github.com/DivanteLtd/vue-storefront)

This a minimalistic API server created to showcase the minimal set of data reqired by [vue-storefront](https://github.com/DivanteLtd/vue-storefront), served - just like its API does.

It means You can use it as a "working-documentation". Just by modifying the way `lowdb` is sourced OR creating Your own endpoints - using MongoDB, MYSQL or any other data source instead of `lowdb` You're able to connect Vue Storefront to virtually any data source.

## Introduction

This project was created to improve `vue-storefront`'s developer experience and make the 3rd party backend's integration easier. It bases on `lowdb`, JSON-file based database for simplicity. 

## Installation

`npm install`

## How to use?

This repo consists of a few important `.json` files:
- `./data/db.js` or `./data/db.json` - file with the data which will be provided via specified routes

**Note:** You can update the `data` dumps by using `data/fetch_demo_products.sh`. This command is dumping the fresh JSON from `https://demo.storefrontcloud.io` and cuts off all non-mandatory fields using the [`jq` tool](https://stedolan.github.io/jq/).

Once you set up everything, simply run `yarn start` and the server will start.

## Roadmap

- [x] basic server implementation
- [ ] dump minimalistic sets all types of entities - static data in `data/*.json`
- [ ] implement all routes of the [vue-storefront-api specification](https://github.com/DivanteLtd/vue-storefront-integration-boilerplate/blob/master/1. Expose the API endpoints required by VS/Required API specification.md)