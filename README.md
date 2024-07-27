## Magical Arena Game 
The following project is a Magical Arena Game played between 2 players which is built in Node.js. Every Player is defined by a “health” attribute, “strength” attribute and an “attack” attribute - all positive integers. The player dies if his health attribute touches 0. 

## Rules
1. Any two player can fight a match in the arena. Players attack in turns. Attacking player rolls the attacking dice and the defending player rolls the defending dice. The “attack” value multiplied by the outcome of the  attacking dice roll is the damage created by the attacker. The defender “strength” value, multiplied by the outcome of the defending dice is the damage defended by the defender. Whatever damage created by attacker which is in excess of the damage defended by the defender will reduce the “health” of the defender. Game ends when any players health reaches 0.
2. Player with lower health attacks first at the start of a match.
3. Assume two players. Player A 50 health 5 strength 10 attack Player B 100 health 10 stregnth and 5 attack . Attacking dice and Defending dice are both 6 sided dice with values ranging from 1 - 6.
4. Player A attacks and rolls dice. dice roll : 5 . Player B defends and rolls dice. dice roll 2. Attack damage is 5 * 10 = 50. Defending strength = 10 * 2 = 20. Player B health reduced by 30 to 70.
5. Player B attacks and rolls dice. dice roll : 4. Player A defends and rolls dice. dice Roll 3. Attack damage is 4 * 5 = 20. Defending strength = 5 * 3 = 15. Player A health reduced by 5 to 45.

## Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version v20.13.1

## Getting started
- Clone the repository
```
git clone https://github.com/mihirarora28082000/Magical-Arena.git
```
- Install dependencies
```
cd magical-arena
npm install
```
- Build and run the project
```
npm start
```

## Testing 
The tests are written in jest.
```
"jest": "^29.7.0"
```

- Run testcases
```
npm test
```
