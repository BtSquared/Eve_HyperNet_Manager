const mongoose = require('mongoose')
const ShipSchema = require('./Ship')

const Ship = mongoose.model('ships', ShipSchema)

module.exports = {
  // Export Models Here
  Ship
}
