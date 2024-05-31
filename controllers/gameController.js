// controllers/gameController.js
const Game = require('../models/game');

exports.createGame = async (req, res) => {
  try {
    const newGame = new Game(req.body);
    const game = await newGame.save();
    res.status(201).json(game);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json({ message: 'Game deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
