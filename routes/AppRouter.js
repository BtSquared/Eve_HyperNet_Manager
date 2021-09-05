const { Router } = require('express')
const ships = require('./shipsRouter')
const estvals = require('./estvalsRouter')
const contract = require('./contractRouter')

const AppRouter = Router()

AppRouter.use('/ships', ships)
AppRouter.use('/estvals', estvals)
AppRouter.use('/contract', contract)

module.exports = AppRouter
