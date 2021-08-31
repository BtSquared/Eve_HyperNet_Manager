const { Router } = require('express')
const ships = require('./shipsRouter')

const AppRouter = Router()

AppRouter.use('/ships', ships)

module.exports = AppRouter
