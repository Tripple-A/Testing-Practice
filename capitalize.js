const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const reverse = (string) => string.split('').reverse().join('');

module.exports = capitalize;