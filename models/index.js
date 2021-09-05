const mongoose = require('mongoose')
const ShipSchema = require('./Ship')
const EstValSchema = require('./EstValue')
const ContractsSchema = require('./Contracts')

const Ship = mongoose.model('ships', ShipSchema)
const EstVal = mongoose.model('estvals', EstValSchema)
const Contract = mongoose.model('contracts', ContractsSchema)

module.exports = {
  // Export Models Here
  Ship,
  EstVal,
  Contract
}
