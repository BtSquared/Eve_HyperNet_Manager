const { Router } = require('express')
const controller = require('../controllers/controller')
const router = Router()

router.get('/', controller.GetShip)
router.get('/makeships', controller.MakeShips)
router.get('/getestimatedvalue', controller.GetEstimatedValue)
router.post('/estimatedvalue', controller.PostEstimatedValue)
router.delete('/deleteships', controller.DeleteShips)

module.exports = router
