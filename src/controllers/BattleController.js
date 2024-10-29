// src/controllers/BattleController.js
class BattleController {
    static async initiateBattle(player, enemy) {
        console.log(`A battle begins between ${player.name} and ${enemy.name}!`);

        while (player.health > 0 && enemy.health > 0) {
            await player.attackEnemy(enemy);
            if (enemy.health > 0) {
                enemy.attackEnemy(player);
            }
        }

        if (player.health > 0) {
            console.log(`${player.name} defeated ${enemy.name} and earned XP!`);
            player.gainXP(50);
        }
    }
}

module.exports = BattleController;
