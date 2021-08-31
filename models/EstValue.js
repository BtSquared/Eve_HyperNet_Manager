const { Schema } = require('mongoose')

const EstValue = new Schema(
  {
    estVal: { type: Array, require: true }
  },
  { timestamps: true }
)

module.exports = EstValue
