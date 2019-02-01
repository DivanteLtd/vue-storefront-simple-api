const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const cors = require('cors')

const server = express()
const low = require('lowdb')
//const FileSync = require('lowdb/adapters/FileSync')
//const db = low(new FileSync('db.js'))

const Memory = require('lowdb/adapters/Memory')
const db = low( new Memory(null, { defaultValue: require('../data/db') }))

server.use(bodyParser.json())
server.use(cors({
  exposedHeaders: config.corsHeaders,
}))

server.get('/db', (req, res) => {
  res.jsonp(db.getState())
})
server.use(require('./routes/catalog')(config, db))

const port = process.env.PORT || config.server.port
const host = process.env.HOST || config.server.host
server.listen(port, host, () => {
  console.log(`Vue Storefront Simple API started at http://${host}:${port}`);
});