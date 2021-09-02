const axios = require('axios')
const { Ship, EstVal } = require('../models/index')
const ShipIds = require('../ShipIds.json')

const GetShip = async (req, res) => {
  try {
    const ships = await Ship.find()
    res.json(ships)
  } catch (err) {
    console.log(err)
  }
}

const MakeShips = async (req, res) => {
  try {
    const hyperCoreMarket = await axios.get(
      `https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&location_id=60003760&order_type=sell&page=1&type_id=52568`
    )
    let hyperCoreAvg = 0
    const hyperCoreOrders = hyperCoreMarket.data.sort(
      (a, b) => a.price - b.price
    )
    for (let i = 0; i < 10; i++) {
      hyperCoreAvg += hyperCoreOrders[i].price
    }
    hyperCoreAvg = hyperCoreAvg / 10
    const estValue = await EstVal.find({ name: 'EstimatedShipValue' })
    ShipIds.map(async (ship, index) => {
      const response = await axios.get(
        `https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&location_id=60003760&order_type=sell&page=1&type_id=${ship.itemId}`
      )

      //get average price of cheapest 10 market orders
      const marketOrders = response.data.sort((a, b) => a.price - b.price)
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
      console.log(sum, ship.itemId)
      sum = sum / listlength

      //math values
      const totalPrice = Math.floor(
        estValue[0].estimatedValue[index].EstPrice * 1.4
      )
      const payOut = Math.floor(totalPrice * 0.95)
      const hyperCoreCount = Math.ceil(totalPrice / 5281172.73993)
      const capitolRequired = hyperCoreCount * hyperCoreAvg + sum
      const profit = Math.floor(payOut / 2 - hyperCoreCount * hyperCoreAvg)
      const loss = Math.floor(capitolRequired - payOut / 2)
      const shipOdds = profit / loss
      const newShip = await new Ship({
        shipName: ship.name,
        itemId: ship.itemId,
        odds: shipOdds.toFixed(3),
        coreCount: hyperCoreCount,
        capitolReq: capitolRequired,
        potentialProfit: profit,
        potentialLoss: loss
      })
      await newShip.save()
    })
    setTimeout(async () => {
      const ships = await Ship.find()
      res.json({ ships })
    }, 10000)
  } catch (err) {
    console.log(err)
  }
}

const NukeShips = async (req, res) => {
  await Ship.deleteMany()
  const ships = await Ship.find()
  res.json({ ships })
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

const NukeEstVal = async (req, res) => {
  await EstVal.deleteMany()
  const estVal = await EstVal.find()
  res.json({ estVal })
}

module.exports = {
  GetShip,
  MakeShips,
  NukeShips,
  GetEstimatedValue,
  PostEstimatedValue,
  UpdateEstimatedValues,
  NukeEstVal
}
