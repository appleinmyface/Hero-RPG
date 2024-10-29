// src/data/enemiesData.js
const Enemy = require('../models/Enemy');

function generateEnemy(level) {
    return new Enemy(level);
}

module.exports = { generateEnemy };
