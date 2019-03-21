import { Greeter } from '../index';
test('My Greeter', () => {
  const expected = 'Hello Carl from Magnus';
  const actual = Greeter('Carl');

  expect(actual.length).toBeGreaterThanOrEqual(expected.length);
  expect(actual.substring(0, expected.length)).toBe(expected);
});
