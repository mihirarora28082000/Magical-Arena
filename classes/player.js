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
        this.health = health;
        this.strength = strength;
        this.attack = attack;

        /**
         * @description Getter which returns weather a person is Alive or Not
         * @param {Int} minium
         * @param {Int} maximum
         * @returns {Int}
        */
        Object.defineProperty(this, 'isAlive', {
            get: () => this.health > 0
        })
    }

    /**
     * @description Denotes the player's dice which returns a random integer between minimum and maximum
     * @param {Int} minium
     * @param {Int} maximum
     * @returns {Int}
    */
    dice({ minimum, maximum }) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }
}

module.exports = {
    Player
}
