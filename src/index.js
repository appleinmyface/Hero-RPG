// src/index.js
const { characterCreationPrompt } = require('./views/prompts');
const CharacterBuilder = require('./controllers/CharacterBuilder');
const BattleController = require('./controllers/BattleController');
const { generateEnemy } = require('./data/enemiesData');

async function startGame() {
    const answers = await characterCreationPrompt();

    const character = new CharacterBuilder()
        .setName(answers.name)
        .setTrait(answers.trait)
        .build();

    console.log('New character created:', character);

    const enemy = generateEnemy(answers.enemyLevel);
    console.log(`An enemy ${enemy.name} appears with ${enemy.health} health and ${enemy.attack} attack!`);

    await BattleController.initiateBattle(character, enemy);
}

startGame().catch((error) => {
    console.error('Error:', error);
});
