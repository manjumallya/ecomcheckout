const sku = require('../getSku/getSku.json')

module.exports = ((server) => {
    server.post('/updateSku', ((req, res, next) => {
        const base = 'usecase'
        const option = req.headers.referer
        const { pagename } = req.headers
        const index = option.indexOf(base)
        const request = req.headers.referer.substring(index + base.length + 1)

        const basketdata = req.body;
        for(const data of basketdata) {
            for (const [index,skuItem] of sku.basket.entries()) {
                if (skuItem.productId === data.productId) {
                    skuItem.availableStock -= data.quantity
                    if(skuItem.availableStock == 0) {
                        sku.basket.splice(index,1)
                    }
                }
            }
        }
        res.status(200).send(sku);
        return next()
    }));
})
