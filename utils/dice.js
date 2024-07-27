/**
 * @description Function which returns a random integer between minimum and maximum integer
 * @param {Int} minium
 * @param {Int} maximum
 * @returns {Int}
 */
const dice = ({minimum, maximum}) => {
    return Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum;
}

module.exports = {
    dice
}
