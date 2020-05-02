const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  difficultLevel: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Recipe', recipeSchema)
