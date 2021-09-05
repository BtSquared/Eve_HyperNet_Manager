const axios = require('axios')
const { Ship } = require('../models/index')
const ShipIds = require('../ShipIds.json')

const GetShips = async (req, res) => {
  try {
    const ships = await Ship.find()
    res.json({ ships })
  } catch (err) {
    res.send(err)
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
    for (let i = 0; i < ShipIds.length; i++) {
      const response = await axios.get(
        `https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&location_id=60003760&order_type=sell&page=1&type_id=${ShipIds[i].itemId}`
      )

      //get average price of cheapest 10 market orders
      const marketOrders = response.data.sort((a, b) => a.price - b.price)
      let sum = 0
      let listlength = 0
      if (marketOrders.length > 10) {
        for (let j = 0; j < 10; j++) {
          sum += marketOrders[j].price
          listlength++
        }
      } else {
        for (let j = 0; j < marketOrders.length; j++) {
          sum += marketOrders[j].price
          listlength++
        }
      }
      sum = sum / listlength

      //math values
      const totalPrice = Math.floor(
        estValue[0].estimatedValue[i].EstPrice * 1.4
      )
      const ticketBuy = Math.floor(totalPrice / 2)
      const payOut = Math.floor(totalPrice * 0.95)
      const payOutHalf = payOut / 2
      const hyperCoreCount = Math.ceil(totalPrice / 5281172.73993)
      const hyperCoreCost = hyperCoreCount * hyperCoreAvg
      const capitolRequired = hyperCoreCost + sum + ticketBuy
      const profit = Math.floor(payOutHalf - hyperCoreCost)
      const loss = Math.floor(hyperCoreCost + sum - payOutHalf)
      const shipOdds = profit / loss

      const newShip = await new Ship({
        shipName: ShipIds[i].name,
        itemId: ShipIds[i].itemId,
        odds: shipOdds.toFixed(3),
        coreCount: hyperCoreCount,
        capitolReq: capitolRequired,
        potentialProfit: profit,
        potentialLoss: loss
      })
      await newShip.save()
    }
    const ships = await Ship.find()
    res.json({ ships })
  } catch (err) {
    res.send(err)
  }
}

const UpdateShips = async (req, res) => {
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
    for (let i = 0; i < ShipIds.length; i++) {
      const response = await axios.get(
        `https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&location_id=60003760&order_type=sell&page=1&type_id=${ShipIds[i].itemId}`
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
      sum = sum / listlength

      //math values
      const totalPrice = Math.floor(
        estValue[0].estimatedValue[i].EstPrice * 1.4
      )
      const ticketBuy = Math.floor(totalPrice / 2)
      const payOut = Math.floor(totalPrice * 0.95)
      const payOutHalf = payOut / 2
      const hyperCoreCount = Math.ceil(totalPrice / 5281172.73993)
      const hyperCoreCost = hyperCoreCount * hyperCoreAvg
      const capitolRequired = hyperCoreCost + sum + ticketBuy
      const profit = Math.floor(payOutHalf - hyperCoreCost)
      const loss = Math.floor(hyperCoreCost + sum - payOutHalf)
      const shipOdds = profit / loss

      await Ship.findOneAndUpdate(
        {
          itemId: ShipIds[i].itemId
        },
        {
          odds: shipOdds.toFixed(3),
          coreCount: hyperCoreCount,
          capitolReq: capitolRequired,
          potentialProfit: profit,
          potentialLoss: loss
        },
        { new: true }
      )
    }
    const ships = await Ship.find()
    res.json({ ships })
  } catch (err) {
    res.send(err)
  }
}

const NukeShips = async (req, res) => {
  await Ship.deleteMany()
  const ships = await Ship.find()
  res.json({ ships })
}

module.exports = {
  GetShips,
  MakeShips,
  UpdateShips,
  NukeShips
}
