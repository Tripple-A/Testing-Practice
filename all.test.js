const capitalize = require('./capitalize');

test('it takes in a string and returns same with first letter capitalized', () => {
  expect(capitalize('girl')).toBe('Girl');
});