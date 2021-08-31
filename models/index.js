const mongoose = require('mongoose')
const ShipSchema = require('./Ship')
const EstValSchema = require('./EstValue')

const Ship = mongoose.model('ships', ShipSchema)
const EstVal = mongoose.model('estvals', EstValSchema)

module.exports = {
  // Export Models Here
  Ship,
  EstVal
}
