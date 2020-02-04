const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const reverse = (string) => string.split('').reverse().join('');

const Calculator = (() => {
  const add = (a, b) => (a + b);

  const subtract = (a, b) => a - b;

  const divide = (a, b) => a / b;

  const multiply = (a, b) => a * b;

  return {
    add, subtract, divide, multiply,
  };
})();

const caesar = (str, k) => {
  const check1 = (newcode) => String.fromCharCode(((newcode - 122) % 26) + 96);

  const check2 = (newcode) => String.fromCharCode(newcode);

  const check3 = (newcode) => String.fromCharCode(((newcode - 90) % 26) + 64);

  for (let index=0; index < str.length; index++) {
    const letter = str.charAt(index);
    const code = str.charCodeAt(index);
    const newcode = code + k;
    if (code >= 97 && code <= 122) {
      newcode > 122 ? str = str.replace(letter, check1(newcode)) : str = str.replace(letter, check2(newcode));
    }
    if (code >= 65 && code <= 90) {
      newcode > 90 ? str = str.replace(letter, check3(newcode)) : str = str.replace(letter, check2(newcode));
    }
  }
  return str;
};
export {
  capitalize, reverse, Calculator, caesar,
};