const axios = require('axios')
const { Ship, EstVal } = require('../models/index')
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

const GetMarketValue = async (req, res) => {
  try {
    const estValue = await EstVal.find({ name: 'EstimatedShipValue' })
    ShipIds.map(async (ship, index) => {
      const response = await axios.get(
        `https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&location_id=60003760&order_type=sell&page=1&type_id=${ship.itemId}`
      )
      let marketOrders = response.data.sort((a, b) => a.price - b.price)
      let sum = 0
      let listlength = 0
      if (marketOrders.length > 10) {
        for (let i = 0; i < 10; i++) {
          sum += marketOrders[i].price
          listlength++
        }
      } else {
        for (let i = 0; i < marketOrders.length; i++) {
          sum += marketOrders[i].price
          listlength++
        }
      }
      sum = sum / listlength
      const totalPrice = Math.floor(
        estValue[0].estimatedValue[index].EstPrice * 1.4
      )
      const PayOut = Math.floor(totalPrice * 0.95)
      console.log(
        `sum => ${sum} totalPrice => ${totalPrice} shipId => ${ship.itemId}`
      )
    })
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
