const axios = require('axios')
const { EstVal } = require('../models/index')
const ShipIds = require('../ShipIds.json')

const GetEstimatedValue = async (req, res) => {
  try {
    const estVal = await EstVal.find({ name: 'EstimatedShipValue' })
    res.json({ estVal })
  } catch (err) {
    res.send(err)
  }
}

const PostEstimatedValue = async (req, res) => {
  try {
    const response = await axios.get(
      'https://esi.evetech.net/latest/markets/prices/?datasource=tranquility'
    )
    let filtered = []
    for (let i = 0; i < ShipIds.length; i++) {
      for (let j = 0; j < response.data.length; j++) {
        if (ShipIds[i].itemId === response.data[j].type_id) {
          filtered.push({
            EstPrice: Math.floor(response.data[j].average_price),
            itemId: response.data[j].type_id
          })
        }
      }
    }
    const estVal = await new EstVal({
      name: 'EstimatedShipValue',
      estimatedValue: filtered
    })
    await estVal.save()
    res.json({ estVal })
  } catch (err) {
    res.send({ err })
  }
}

const UpdateEstimatedValues = async (req, res) => {
  try {
    const response = await axios.get(
      'https://esi.evetech.net/latest/markets/prices/?datasource=tranquility'
    )
    let filtered = []
    for (let i = 0; i < ShipIds.length; i++) {
      for (let j = 0; j < response.data.length; j++) {
        if (ShipIds[i].itemId === response.data[j].type_id) {
          filtered.push({
            EstPrice: Math.floor(response.data[j].average_price),
            itemId: response.data[j].type_id
          })
        }
      }
    }
    await EstVal.findOneAndUpdate(
      { name: 'EstimatedShipValue' },
      { estimatedValue: filtered },
      { new: true }
    )
    const check = await EstVal.find()
    res.json({ check })
  } catch (err) {
    res.send(err)
  }
}

const NukeEstVal = async (req, res) => {
  await EstVal.deleteMany()
  const estVal = await EstVal.find()
  res.json({ estVal })
}

module.exports = {
  GetEstimatedValue,
  PostEstimatedValue,
  UpdateEstimatedValues,
  NukeEstVal
}
