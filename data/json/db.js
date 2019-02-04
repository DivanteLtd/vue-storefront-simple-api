const state = {
  product: require('./products.json'),
  category: require('./categories.json'),
  attribute: require('./attributes.json')
}
const low = require('lowdb')
const Memory = require('lowdb/adapters/Memory')
const db = low( new Memory(null, { defaultValue: state }))

module.exports = {
  getState: () => {
    return db.getState()
  },
  executeQuery: (query) => {
    const util = require('util')

    console.log(util.inspect(query, false, null, true /* enable colors */))
    return {
      items: [],
      total: 0,
      start: 0,
      perPage: 0,
      aggregations: []
    }
  }
}