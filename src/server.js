const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const cors = require('cors')
const path = require('path')
const server = express()

let format = 'json'
const db = require(path.join((process.env.API_DATA_DIR ? process.env.API_DATA_DIR : process.cwd()), 'data', format, 'db.js'))

server.use(bodyParser.json())
server.use(cors({
  exposedHeaders: config.corsHeaders,
}))

server.get('/db', (req, res) => {
  res.jsonp(db.getState())
})
server.use(require(path.join(__dirname, 'routes','catalog'))(config, db))

const port = process.env.PORT || config.server.port
const host = process.env.HOST || config.server.host
server.listen(port, host, () => {
  console.log(`Vue Storefront Simple API started at http://${host}:${port}`);
});