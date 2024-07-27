const { ATTACKER_DICE_RANGE, DEFENDER_DICE_RANGE } = require('../utils/constants');

/**
 * Magical Arena class definition
 */
class MagicalArena {
    /**
     * @param {Player} playerA
     * @param {Player} playerB
     */

    constructor({
        playerA,
        playerB
    }) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    /**
     * @description A Magical fight match between the 2 players with one attacker
     * and one defender
     * @param {Player} attacker
     * @param {Player} defender
     * @returns {void}
     */
    fight({ attacker, defender }) {
        // Attacker and Defender rolls the dice
        /**
         * @type {Int}
         */
        const attackerDiceRoll = attacker.dice({ minimum: ATTACKER_DICE_RANGE.MINIMUM, maximum: ATTACKER_DICE_RANGE.MAXIMUM });
        console.log(`Attacker rolls ${attackerDiceRoll} on the dice`);

        /**
         * @type {Int}
         */
        const defenderDiceRoll = defender.dice({ minimum: DEFENDER_DICE_RANGE.MINIMUM, maximum: DEFENDER_DICE_RANGE.MAXIMUM });
        console.log(`Defender rolls ${defenderDiceRoll} on the dice`);

        // Attack Damage and Defending Strength values
        const attackDamage = attackerDiceRoll * attacker.attack;
        const defendingStrength = defenderDiceRoll * defender.strength;

        // Net Damage done from the attack
        const damageOfAttack = Math.max(0, attackDamage - defendingStrength);
        defender.health -= damageOfAttack;
        console.log(`Damage done during the match ${damageOfAttack}\n`);
    }

    /**
     * @description The Magical Arena game played between 2 players
     * @returns {Int} Return 1 if player A wins otherwise return 0
     */
    game() {
        // Player with less health would start the game
        let attacker = this.playerA.health > this.playerB.health ? this.playerB : this.playerA;
        let defender = attacker === this.playerA ? this.playerB : this.playerA;

        // Fight number
        let fightNumber = 0;

        while (attacker.isAlive && defender.isAlive) {
            fightNumber += 1;

            console.log(`Fight Number - ${fightNumber}`)
            console.log(`Player A current health ${this.playerA.health}`);
            console.log(`Player B current health ${this.playerB.health}`);
            this.fight({ attacker: attacker, defender: defender });

            // Swap roles of attacker and defender after the fight
            let role = attacker;
            attacker = defender;
            defender = role;
        }

        if (this.playerA.isAlive) {
            console.log("Player A Wins the Magical Arena");
            return 1;
        }
        console.log("Player B Wins the Magical Arena");
        return 0;
    }
}

module.exports = {
    MagicalArena
}
