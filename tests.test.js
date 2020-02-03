import { capitalize, reverse } from './tests';

test('it takes in a string and returns same with first letter capitalized', () => {
  expect(capitalize('girl')).toBe('Girl');
});

test('it takes in a string and returns the reverse of the string', () => {
  expect(reverse('girl')).toBe('lrig');
});