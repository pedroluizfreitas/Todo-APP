const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
     // Server.use = middleware
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    // Register vai utilizar todos os métodos feitos no array em todoService.
    todoService.register(router, '/todos')
}