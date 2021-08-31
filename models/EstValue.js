const { Schema } = require('mongoose')

const EstValue = new Schema(
  {
    name: { type: String, require: true },
    estimatedValue: { type: Array, require: true }
  },
  { timestamps: true }
)

module.exports = EstValue
