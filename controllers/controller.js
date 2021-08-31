const axios = require('axios')
const { Ship, EstVal } = require('../models/index')
const ShipIds = require('../ShipIds.json')
const BASE_URL = require('../globals')

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

const GetMarketValue = async (req, res) => {
  try {
    const estValue = await EstVal.find({ name: 'EstimatedShipValue' })
    res.json(estValue)
    // let marketData = []
    // ShipIds.map(async (ship) => {
    //   const response = await axios.get(
    //     `https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&location_id=60003760&order_type=sell&page=1&type_id=${ship.itemId}`
    //   )
    //   let marketOrders = response.data.sort((a, b) => a.price - b.price)
    //   let sum = 0
    //   for (let i = 0; i < 10; i++) {
    //     sum += marketOrders[i].price
    //   }
    //   sum = sum / 10
    //   marketData.push({ marketAvg: sum, itemId: ship.itemId })
    //   console.log(sum)
    // })
    // setTimeout(() => {
    //   res.json(marketData)
    // }, 2000)
  } catch (err) {
    console.log(err)
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
    res.josn({ estVal })
  } catch (err) {
    console.log(err)
  }
}

const GetEstimatedValue = async (req, res) => {
  try {
    const estVal = await EstVal.find({ name: 'EstimatedShipValue' })
    res.send(estVal)
  } catch (err) {
    console.log(err)
  }
}

const UpdateEstimatedValues = async (req, res) => {
  try {
    res.send(ShipIds)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  GetShip,
  GetMarketValue,
  GetEstimatedValue,
  PostEstimatedValue,
  UpdateEstimatedValues
}
