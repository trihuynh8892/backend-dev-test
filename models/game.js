// models/game.js
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Game', GameSchema);
