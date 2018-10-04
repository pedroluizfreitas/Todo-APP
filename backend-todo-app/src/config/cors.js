// Função recebe 3 parâmetros: (req)uisição, (res)posta e (next)
module.exports = function (req, res, next) {
    // Criação de um middleware padrão express: http://expressjs.com/pt-br/guide/using-middleware.html
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}