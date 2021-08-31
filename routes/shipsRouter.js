const { Router } = require('express')
const controller = require('../controllers/controller')
const router = Router()

router.get('/', controller.GetShip)
router.get('/marketvalue', controller.GetMarketValue)
router.get('/estimatedvalue', controller.GetEstimatedValue)

module.exports = router
