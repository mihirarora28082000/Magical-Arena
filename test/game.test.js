const { test, beforeEach } = require('@jest/globals');
const { Player } = require('../classes/player');
const { MagicalArena } = require('../classes/magicalArena');

describe('Test Magical Arena', () => {

    let playerA;
    let playerB;
    let dicePlayerAMock;
    let dicePlayerBMock;
    beforeEach(() => {
        // Define Test Players
        playerA = new Player({ health: 40, attack: 10, strength: 5 });
        playerB = new Player({ health: 50, attack: 5, strength: 10 });

        // Mock Dice to return a fixed value
        dicePlayerAMock = jest.spyOn(playerA, 'dice').mockReturnValue(5);
        dicePlayerBMock = jest.spyOn(playerB, 'dice').mockReturnValue(2);
    });

    /**
     * Test Magical Arena 1
     * Mock PlayerA Dice: 3
     * Mock PlayerB Dice: 3
     * Result: PlayerA Wins
     */
    test('Test Magical Arena 1', () => {

        const arena = new MagicalArena({ playerA: playerA, playerB: playerB });
        const result = arena.game();

        expect(dicePlayerAMock).toHaveBeenCalledTimes(3);
        expect(dicePlayerBMock).toHaveBeenCalledTimes(3);
        expect(result).toEqual(1);

    });

    /**
     * Test Magical Arena 2
     * Mock PlayerA Dice: 3
     * Mock PlayerB Dice: 4
     * Result: PlayerB Wins
     */
    test('Test Magical Arena 2', () => {
        const dicePlayerAMock = jest.spyOn(playerA, 'dice').mockReturnValue(3);
        const dicePlayerBMock = jest.spyOn(playerB, 'dice').mockReturnValue(4);

        const arena = new MagicalArena({ playerA: playerA, playerB: playerB });
        const result = arena.game();

        expect(dicePlayerAMock).toHaveBeenCalledTimes(16);
        expect(dicePlayerBMock).toHaveBeenCalledTimes(16);
        expect(result).toEqual(0);

    });

    /**
     * Test Magical Arena 3
     * Mock PlayerA Dice: 1
     * Mock PlayerB Dice: 6
     * Result: PlayerB Wins
     */
    test('Test Magical Arena 3', () => {
        const dicePlayerAMock = jest.spyOn(playerA, 'dice').mockReturnValue(1);
        const dicePlayerBMock = jest.spyOn(playerB, 'dice').mockReturnValue(6);

        const arena = new MagicalArena({ playerA: playerA, playerB: playerB });
        const result = arena.game();

        expect(dicePlayerAMock).toHaveBeenCalledTimes(4);
        expect(dicePlayerBMock).toHaveBeenCalledTimes(4);
        expect(result).toEqual(0);

    });

    /**
     * Test Magical Arena 3
     * Mock PlayerA Dice: 6
     * Mock PlayerB Dice: 1
     * PlayerA Wins
     */
    test('Test Magical Arena 4', () => {
        const dicePlayerAMock = jest.spyOn(playerA, 'dice').mockReturnValue(6);
        const dicePlayerBMock = jest.spyOn(playerB, 'dice').mockReturnValue(1);

        const arena = new MagicalArena({ playerA: playerA, playerB: playerB });
        const result = arena.game();

        expect(dicePlayerAMock).toHaveBeenCalledTimes(1);
        expect(dicePlayerBMock).toHaveBeenCalledTimes(1);
        expect(result).toEqual(1);
    });
});
