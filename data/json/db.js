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
  }
}