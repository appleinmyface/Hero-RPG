// src/views/prompts.js
const inquirer = require('inquirer').default;

async function characterCreationPrompt() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter character name:',
        },
        {
            type: 'list',
            name: 'trait',
            message: 'Select character trait:',
            choices: ['Strong', 'Fast', 'Tank'],
        },
        {
            type: 'list',
            name: 'enemyLevel',
            message: 'Select an enemy level (1-10) to fight:',
            choices: Array.from({ length: 10 }, (_, i) => i + 1),
        },
    ]);
}

module.exports = { characterCreationPrompt };
