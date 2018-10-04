// Loader vai fazer um require server que está dentro do config
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)
