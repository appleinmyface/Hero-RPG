// src/models/Character.js
const inquirer = require('inquirer').default;

class Character {
    constructor(name, trait) {
        this.name = name;
        this.health = 100;
        this.attack = 25;
        this.trait = trait;
        this.movementSpeed = 100;
        this.level = 1;
        this.xp = 0;
        this.xpThreshold = 100;
        this.moves = this.defineMoves();
    }

    levelUp() {
        this.xp = 0;
        this.xpThreshold *= 1.5;
        this.health += this.health * 0.1;
        this.attack += this.attack * 0.1;
        this.movementSpeed += this.movementSpeed * 0.05;
        this.level++;
        console.log(`${this.name} leveled up to Level ${this.level}!`);
    }

    gainXP(amount) {
        this.xp += amount;
        console.log(`${this.name} gained ${amount} XP.`);
        if (this.xp >= this.xpThreshold) {
            this.levelUp();
        }
    }

    defineMoves() {
        switch (this.trait) {
            case 'Strong':
                return [
                    { name: 'Power Punch', multiplier: 1.5, requiredLevel: 3 },
                    { name: 'Ground Smash', multiplier: 1.8, requiredLevel: 6 },
                    { name: 'Beast Mode', multiplier: 2.3, requiredLevel: 9 }
                ];
            case 'Fast':
                return [
                    { name: 'Quick Jab', multiplier: 1.2, requiredLevel: 3 },
                    { name: 'Flash Strike', multiplier: 1.5, requiredLevel: 6 },
                    { name: 'KickStyle: Sonic Boom', multiplier: 1.9, requiredLevel: 9 }
                ];
            case 'Tank':
                return [
                    { name: 'Shield Bash', multiplier: 1.1, requiredLevel: 3 },
                    { name: 'Fortified Slam', multiplier: 1.3, requiredLevel: 6 },
                    { name: 'Titanic Charge', multiplier: 1.7, requiredLevel: 9 }
                ];
            default:
                return [{ name: 'Basic Attack', multiplier: 1.0, requiredLevel: 1 }];
        }
    }

    async chooseMove() {
        const availableMoves = this.moves.filter(move => this.level >= move.requiredLevel);
        const { selectedMove } = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedMove',
                message: `Choose a move for ${this.name}:`,
                choices: availableMoves.map((move) => move.name),
            },
        ]);

        return availableMoves.find((move) => move.name === selectedMove);
    }

    async chooseMove() {
        const { selectedMove } = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedMove',
                message: `Choose a move for ${this.name}:`,
                choices: this.moves.map((move) => move.name),
            },
        ]);

        return this.moves.find((move) => move.name === selectedMove);
    }

    async attackEnemy(enemy) {
        const move = await this.chooseMove();
        const damage = this.attack * move.multiplier;
        console.log(`${this.name} uses ${move.name} on ${enemy.name}, dealing ${damage.toFixed(2)} damage!`);
        enemy.takeDamage(damage);
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage.toFixed(2)} damage. Health is now ${this.health.toFixed(2)}`);
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated!`);
        }
    }
}

module.exports = Character;
