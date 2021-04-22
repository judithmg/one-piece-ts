const { Router } = require('express')
const optcController = require('../controllers/optcController')
function OptcRouter() {
    const router = Router()

    router.route('/characters').get(optcController.getAllCharacters)
    router.route('/details').get(optcController.getAllDetails)

    return router;
}

module.exports = OptcRouter()