const { Router } = require('express')
const controller = require('../controllers/controller')
const router = Router()

router.get('/', controller.GetShip)
router.get('/getestimatedvalue', controller.GetEstimatedValue)
router.post('/makeships', controller.MakeShips)
router.post('/estimatedvalue', controller.PostEstimatedValue)
router.put('/updateestval', controller.UpdateEstimatedValues)
router.put('/updateships', controller.UpdateShips)
router.delete('/nukeships', controller.NukeShips)
router.delete('/nukeestimatedvalue', controller.NukeEstVal)

module.exports = router
