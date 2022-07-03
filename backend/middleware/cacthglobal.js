
//funcao para trabalhar com erro de promessa
module.exports = func => (req, res, next) =>
    Promise
    .resolve(func(req, res, next))
    .catch(next)
