const { Router } = require('express')
const controller = require('../controllers/controller')
const router = Router()

router.get('/', controller.GetShip)
router.get('/purifier', controller.GetPurifier)

module.exports = router
