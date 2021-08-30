const Schema = require('mongoose')

const Ship = new Schema(
  {
    itemId: { type: Number, require: true },
    odds: { type: Number, require: true },
    coreCount: { type: Number, require: false },
    capitolReq: { type: Number, require: false },
    potentialProfit: { type: Number, require: false },
    potentialLoss: { type: Number, require: false }
  },
  { timestamps: true }
)

module.exports = Ship
