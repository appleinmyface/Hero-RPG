// src/controllers/CharacterBuilder.js
const Character = require('../models/Character');
const Traits = require('../models/Traits');

class CharacterBuilder {
    constructor() {
        this.character = new Character();
    }

    setName(name) {
        this.character.name = name;
        return this;
    }

    setTrait(trait) {
        this.character.trait = trait;
        new Traits(this.character); // Apply trait effects
        return this;
    }

    build() {
        return this.character;
    }
}

module.exports = CharacterBuilder;
