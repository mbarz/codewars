import { unflatten } from './unflatten';

describe('solution', () => {
  it.each([
    ['short', [1], [1]],
    ['mid', [3, 5, 2, 1], [[3, 5, 2], 1]],
    [
      'long',
      [1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3],
      [1, [4, 5, 2, 1], 2, [4, 5, 2, 6], 2, [3, 3]],
    ],
  ])('Basic Tests "%s"', (_name, given, expected) => {
    expect(unflatten(given)).toEqual(expected);
  });
});
