const accountData = require('./getAccountData.json')

module.exports = ((server) => {
    server.get('/getAccountData', ((req, res, next) => {
        const base = 'usecase'
        const option = req.headers.referer
        const { pagename } = req.headers
        const index = option.indexOf(base)
        const request = req.headers.referer.substring(index + base.length + 1)

        if (request === 'getAccountData') {
            res.status(200).send(accountData)
        } else{
            res.status(200).send(accountData)
        }
        return next()
    }));
})
