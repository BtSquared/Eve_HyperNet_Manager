const axios = require('axios')
const { Ship, EstVal, Contract } = require('../models/index')
const ShipIds = require('../ShipIds.json')

const getContracts = async (req, res) => {
  try {
    const contract = Contract.find()
    res.json({ contract })
  } catch (err) {
    console.log(err)
  }
}

const postContract = async (req, res) => {
  try {
    const contract = await new Contract({
      activeContracts: [],
      profit: 0
    })
    await contract.save()
    res.json({ contract })
  } catch (err) {
    console.log(err)
  }
}

const updateContract = async (req, res) => {
  try {
    const contract = await Contract.find()
    console.log(contract)
    // await Contract.findOneAndUpdate({ ObjectId: req.body.Id }, {})
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getContracts,
  postContract,
  updateContract
}
