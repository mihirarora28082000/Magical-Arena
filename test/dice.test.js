const { test, expect } = require('@jest/globals');
const { Player } = require('../classes/player');

test('Test Dice', () => {
    const MINIMUM_DICE_VALUE = 1;
    const MAXIMUM_DICE_VALUE = 6;

    let player = new Player({
        health: 100,
        attack: 60,
        strength: 30
    });
    const value = player.dice({ minimum: MINIMUM_DICE_VALUE, maximum: MAXIMUM_DICE_VALUE });

    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(6);

});
