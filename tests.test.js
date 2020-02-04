import { 
  capitalize, reverse, Calculator, caesar, analyze,
} from './tests';

test('it takes in a string and returns same with first letter capitalized', () => {
  expect(capitalize('girl')).toBe('Girl');
});

test('it takes in a string and returns the reverse of the string', () => {
  expect(reverse('girl')).toBe('lrig');
});

test('it takes executes basic calculator functions', () => {
  expect(Calculator.add(1, 2)).toBe(3);
  expect(Calculator.subtract(9, 2)).toBe(7);
  expect(Calculator.divide(9, 2)).toBeCloseTo(4.5);
  expect(Calculator.divide('s', 'l')).toBeNaN();
  expect(Calculator.multiply(10, 5)).toBe(50);
});

test('it takes in a string and returns the caesar cipher of the string', () => {
  expect(caesar('abc', 3)).toBe('def');
  expect(caesar('xyz', 5)).toBe('cde');
  expect(caesar('middle-Outz', 2)).toBe('okffng-Qwvb');
});

test('it takes in an array and returns an object with min,max,average and length values', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
