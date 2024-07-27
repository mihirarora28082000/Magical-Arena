const { Player } = require("./classes/player")
const { MagicalArena } = require("./classes/magicalArena");
const { PLAYER_A, PLAYER_B } = require("./utils/constants")
const { HEALTH: HEALTH_A, STRENGTH: STRENGTH_A, ATTACK: ATTACK_A } = PLAYER_A;
const { HEALTH: HEALTH_B, STRENGTH: STRENGTH_B, ATTACK: ATTACK_B } = PLAYER_B;

let playerA = new Player({ health: HEALTH_A, strength: STRENGTH_A, attack: ATTACK_A });
let playerB = new Player({ health: HEALTH_B, strength: STRENGTH_B, attack: ATTACK_B });

let magicalArena = new MagicalArena({
    playerA: playerA,
    playerB: playerB
});

magicalArena.game();
