const { Router } = require('express')
const estvalsController = require('../controllers/estvalsController')
const router = Router()

router.get('/getestimatedvalue', estvalsController.GetEstimatedValue)
router.post('/estimatedvalue', estvalsController.PostEstimatedValue)
router.put('/updateestval', estvalsController.UpdateEstimatedValues)
router.delete('/nukeestimatedvalue', estvalsController.NukeEstVal)

module.exports = router
