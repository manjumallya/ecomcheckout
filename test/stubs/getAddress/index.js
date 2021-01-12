const address = require('./getAddress.json')

module.exports = ((server) => {
    server.get('/getAddress', ((req, res, next) => {
        const base = 'usecase'
        const option = req.headers.referer
        const { pagename } = req.headers
        const index = option.indexOf(base)
        const request = req.headers.referer.substring(index + base.length + 1)
        if(request === 'addressNotFound'){
            res.status(404).send(null)
        } else {
            res.status(200).send(address)
        }
        return next()
    }));
})
