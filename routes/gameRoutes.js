// routes/gameRoutes.js
const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

const auth = require('../middleware/auth');

router.post('/games', auth, gameController.createGame);
router.get('/games', auth, gameController.getGames);
router.get('/games/:id', auth, gameController.getGameById);
router.put('/games/:id', auth, gameController.updateGame);
router.delete('/games/:id', auth, gameController.deleteGame);

module.exports = router;
