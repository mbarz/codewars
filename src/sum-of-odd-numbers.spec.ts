/**
 * 1
 * 4 4
 * 9 9 9
 * 16 16 16 16
 */
function rowSumOddNumbers(n: number): number {
  return n * n * n;
}

describe('sum of odd numbers', () => {
  it.each([
    [{ row: 1, expected: 1 }],
    [{ row: 2, expected: 3 + 5 }],
    [{ row: 3, expected: 7 + 9 + 11 }],
    [{ row: 4, expected: 13 + 15 + 17 + 19 }],
    [{ row: 5, expected: 21 + 23 + 25 + 27 + 29 }],
  ])(
    'should return %s for row %s',
    ({ row, expected }: { row: number; expected: number }) => {
      expect(rowSumOddNumbers(row)).toEqual(expected);
    }
  );
});
