const { dice } = require('./dice')
const { DICE_RANGE } = require('./constants')

/**
 * @description A Magical Arena match between the 2 players with one attacker
 * and one defender
 * @param {Player} attacker
 * @param {Player} defender
 * @returns {void}
 */
const match = ({ attacker, defender }) => {
    const { MINIMUM, MAXIMUM } = DICE_RANGE;

    // Attacker and Defender rolls the dice
    /**
     * @type {Int}
     */
    const attackerDiceRoll = dice({ minimum: MINIMUM, maximum: MAXIMUM });
    console.log(`Attacker rolls ${attackerDiceRoll} on the dice`);

    /**
     * @type {Int}
     */
    const defenderDiceRoll = dice({ minimum: MINIMUM, maximum: MAXIMUM });
    console.log(`Defender rolls ${defenderDiceRoll} on the dice`);

    // Attack Damage and Defending Strength values
    const attackDamage = attackerDiceRoll * attacker.attack;
    const defendingStrength = defenderDiceRoll * defender.strength;

    // Net Damage done from the attack
    const damageOfAttack = Math.max(0, attackDamage - defendingStrength);
    defender.health-=damageOfAttack;
    console.log(`Damage done during the match ${damageOfAttack}`);
}

module.exports = {
    match
}
