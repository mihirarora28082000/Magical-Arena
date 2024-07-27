/**
 * A Player definition participating in the magical arena
 */

class Player {
    /**
     * @param {Int} health
     * @param {Int} strength
     * @param {Int} attack
     */
    constructor({
        health,
        strength,
        attack
    }) {
        this.health = health
        this.strength = strength
        this.attack = attack
    }
}

module.exports = {
    Player
}
