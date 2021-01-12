const addressData = require('../getAddress/getAddress.json')

module.exports = ((server) => {
    server.post('/updateAddress', ((req, res, next) => {
        const base = 'usecase'
        const option = req.headers.referer
        const { pagename } = req.headers
        const index = option.indexOf(base)
        const request = req.headers.referer.substring(index + base.length + 1)

        const addressRequest = req.body;
        addressData.correspondenceName = addressRequest.name
        addressData.addresses[0].postalCode = addressRequest.postalCode
        addressData.addresses[0].street = addressRequest.street
        addressData.addresses[0].city = addressRequest.city
        addressData.addresses[0].houseNumber = addressRequest.houseNumber
        addressData.phoneNumber = addressRequest.phone
        addressData.personalEmailAddress = addressRequest.email
        res.status(200).send(addressData);

        return next()
    }));
})
