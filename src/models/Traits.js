// src/models/Traits.js

class Traits {
    constructor(character) {
        switch (character.trait) {
            case 'Strong':
                character.attack += character.attack * 0.15;
                break;
            case 'Fast':
                character.movementSpeed += character.movementSpeed * 0.30;
                break;
            case 'Tank':
                character.health += character.health * 0.20;
                break;
            default:
                throw new Error('Invalid trait');
        }
    }
}

module.exports = Traits;
