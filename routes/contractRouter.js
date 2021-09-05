const { Router } = require('express')
const contractsController = require('../controllers/contractsController')
const router = Router()

router.get('/getcontract', contractsController.getContracts)
router.post('/postcontract', contractsController.postContract)
router.put('/updatecontract', contractsController.updateContract)

module.exports = router