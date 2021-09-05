const { Router } = require('express')
const ships = require('./shipsRouter')
const estvals = require('./estvalsRouter')

const AppRouter = Router()

AppRouter.use('/ships', ships)
AppRouter.use('/estvals', estvals)

module.exports = AppRouter
