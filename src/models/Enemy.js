// src/models/Enemy.js
const Character = require('./Character');

class Enemy extends Character {
    constructor(level) {
        super(`Enemy Lv${level}`, 'None');
        this.health = 50 + level * 10;
        this.attack = 10 + level * 5;
    }
}

module.exports = Enemy;
