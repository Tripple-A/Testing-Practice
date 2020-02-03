import { capitalize, reverse, Calculator } from './tests';

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