const { Schema } = require('mongoose')

const Constracts = new Schema(
  {
    activeContracts: { type: Array, require: true },
    profit: { type: Number, require: true }
  },
  {
    timestamps: true
  }
)

module.exports = Constracts
