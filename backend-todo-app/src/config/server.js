const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
// Criando referência para arquivo do CORS
const allowCors = require('./cors')

// urlencoded = padrão utilizado para submissão dos formulários.
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server