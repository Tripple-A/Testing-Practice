const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const reverse = (string) => string.split('').reverse().join('');

const Calculator = (() => {
  const add = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const divide = (a, b) => {
    return a / b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  return {
    add, subtract, divide, multiply,
  };
})();

export { capitalize, reverse, Calculator };