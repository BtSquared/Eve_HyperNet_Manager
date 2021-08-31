const axios = require('axios')
const Ship = require('../models/index')
const ShipIds = require('../ShipIds.json')

const GetShip = async (req, res) => {
  let Arr = []
  try {
    ShipIds.map((ship) => {
      Arr.push(ship)
      console.log(ship)
    })
    res.send(Arr)
  } catch (err) {
    console.log(err)
  }
}
const GetPurifier = async (req, res) => {
  try {
    const response = await axios.get(
      'https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&location_id=60003760&order_type=sell&page=1&type_id=12038'
    )
    console.log(response.data.length)
    let sum = 0
    response.data.map((array) => {
      sum += array.price
    })
    sum = sum / response.data.length
    console.log(sum)
    res.json(response.data)
  } catch (err) {
    console.log(err)
  }
}
const GetEstimatedValue = async (req, res) => {
  try {
    const response = await axios.get(
      'https://esi.evetech.net/latest/markets/prices/?datasource=tranquility'
    )
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  GetShip,
  GetPurifier,
  GetEstimatedValue
}
