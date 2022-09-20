import { unflatten } from './unflatten';

describe('uneasy unflatten', () => {
  it.each([
    {
      given: [4, 5, 1, 7, 1],
      expected: [[4, 5, 1, 7], 1],
    },
    {
      given: [[4, 5, 1, 7, 1]],
      expected: [[[4, 5, 1, 7], 1]],
    },
    {
      given: [4, 5, 1, 7],
      expected: [4, [5, 1, 7]],
      direction: -1,
    },
    {
      given: [[4, 5, 1, 7], 1],
      expected: [[4, [5, 1, 7]], 1],
      direction: -1,
    },
    { given: [4, 5, 1, 7, 1], depth: 2, expected: [[4, [5, 1, 7]], 1] },

    {
      given: [[5, 3], 1, 55, 2],
      depth: 1,
      direction: 1,
      expected: [[5, 3], 1, 55, 2],
    },
    {
      given: [12, 1, [[5, 3], 1, 55, 2], [3, 7, 8], 1],
      depth: 1,
      direction: 1,
      expected: [12, 1, [[5, 3], 1, 55, 2], [3, 7, 8], 1],
    },
    {
      given: [12, 1, [5, 3, 1, 55, 2], [3, 7, 8], 1],
      depth: 2,
      direction: -1,
      expected: [12, 1, [5, [3, 1, 55], 2], [3, 7, 8], 1],
    },
    {
      given: [12, 1, 5, 3, 1, 55, 2, 3, 7, 8, 1],
      depth: 3,
      expected: [12, 1, [5, [3, 1, 55], 2], [3, 7, 8], 1],
    },
  ])(
    'Basic Tests',
    ({
      given,
      expected,
      depth,
      direction,
    }: {
      given: any[];
      expected: any[];
      depth?: number;
      direction?: number;
    }) => {
      const res = unflatten(given, depth || 1, direction);
      expect(JSON.stringify(res)).toEqual(JSON.stringify(expected));
    }
  );
});
