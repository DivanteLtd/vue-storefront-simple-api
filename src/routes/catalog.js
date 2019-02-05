const express = require('express')
const router = express.Router()


module.exports = (config, db) => {
    const queryHandler = (req, res, next) => {
        let requestBody = {}
        if (req.method === 'GET') {
            if (req.query.request) { // we get the JSON query from BODY if it's a POST request or from GET parameter otherwise
                requestBody = JSON.parse(decodeURIComponent(req.query.request))
            }
        } else {
            requestBody = req.body
        }
    
       console.log('Simple API request', req.params, requestBody)
       res.jsonp(db.executeQuery(req.params, requestBody))
    }
    router.post('/api/catalog/:db/:entity', queryHandler)
    router.get('/api/catalog/:db/:entity', queryHandler)
    return router
}

