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
  executeQuery: (context, query) => {
    const util = require('util')
    
    const standardOperators = ['ne', 'eq']
    const rangeOperators = ['gt', 'lt', 'gte', 'lte', 'moreq', 'from', 'to']

    let chain = db.get(context.entity)
    console.log(util.inspect(query, false, null, true /* enable colors */))
 
    query.must.every(queryItem => {
      if (queryItem.hasOwnProperty('match')) {
        chain = chain.filter(element => {
          const elementMatched = false
          const elementValue = _.get(element, path)
          standardOperators.every(operator => {
            if (queryItem.hasOwnProperty(operator)) {
              elementMatched = _[operator](elementValue, queryItem[operator]) // execute operator
              console.log(operator, elementValue, elementMatched)
            }
          })
        })
      } else if (queryItem.hasOwnProperty('range')) {
        
      }

    })
    return {
      items: [],
      total: 0,
      start: 0,
      perPage: 0,
      aggregations: []
    }
  }
}