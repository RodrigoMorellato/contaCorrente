const express = require('express')

module.exports = function(server){
    // Rota Base
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billiCycleService')
    BillingCycle.register(router, '/billingCycles')
}