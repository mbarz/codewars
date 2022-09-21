import { rotateLeft, rotateLikeAVortex } from './solution';

const print = (m: any[][]) => m.map((r) => r.join(' ')).join('\n');

describe('Solution', () => {
  it('Simple rotate', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ];
    const actual = rotateLeft(matrix);

    expect(print(actual)).toEqual(print(expected));
  });

  it('Simple rotate with offset', () => {
    const matrix = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 4, 5, 4],
      [1, 2, 3, 4],
    ];
    const expected = [
      [1, 2, 3, 4],
      [1, 3, 5, 4],
      [1, 2, 4, 4],
      [1, 2, 3, 4],
    ];
    const actual = rotateLeft(matrix, 1);
    const print = (m: any[][]) => m.map((r) => r.join(' ')).join('\n');
    expect(print(actual)).toEqual(print(expected));
  });

  it('Example Tests', () => {
    const matrix = [
      [5, 3, 6, 1],
      [5, 8, 7, 4],
      [1, 2, 4, 3],
      [3, 1, 2, 2],
    ];
    const expected = [
      [1, 4, 3, 2],
      [6, 4, 2, 2],
      [3, 7, 8, 1],
      [5, 5, 1, 3],
    ];
    const actual = rotateLikeAVortex(matrix);
    expect(print(actual)).toEqual(print(expected));
  });
});
