const accountData = require('../getAccount/getAccountData.json')

module.exports = ((server) => {
    server.post('/updateAccountBalance', ((req, res, next) => {
        const base = 'usecase'
        const option = req.headers.referer
        const { pagename } = req.headers
        const index = option.indexOf(base)
        const request = req.headers.referer.substring(index + base.length + 1)

        const addressRequest = req.body;
        for (const account of accountData.accounts) {
            if (account.number === addressRequest.number) {
                account.amount -= addressRequest.basketPrice
            }
        }
        res.status(200).send(accountData);
        return next()
    }));
})
