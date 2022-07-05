
//funcao para trabalhar com erro de promessa (peguei em projeto anterior)
module.exports = func => (req, res, next) =>
    Promise
    .resolve(func(req, res, next))
    .catch(next)
