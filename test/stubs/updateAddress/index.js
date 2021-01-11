
module.exports = ((server) => {
    server.post('/updateAddress', ((req, res, next) => {
        const base = 'usecase'
        const option = req.headers.referer
        const { pagename } = req.headers
        const index = option.indexOf(base)
        const request = req.headers.referer.substring(index + base.length + 1)

        res.status(200).send('success')
        return next()
    }));
})
