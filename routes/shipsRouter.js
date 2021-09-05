const { Router } = require('express')
const shipsController = require('../controllers/shipsController')
const router = Router()

router.get('/', shipsController.GetShips)
router.post('/makeships', shipsController.MakeShips)
router.put('/updateships', shipsController.UpdateShips)
router.delete('/nukeships', shipsController.NukeShips)

module.exports = router
