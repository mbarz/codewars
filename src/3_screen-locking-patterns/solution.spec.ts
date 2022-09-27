import {
  allRoutes,
  calculateCombinations,
  calculateCombinations2,
} from './solution';

describe('example', () => {
  it('should get all connections', () => {
    const all = allRoutes().sort();
    expect(all.join(';')).toEqual(
      'AB;ABC;AD;ADG;AE;AEI;AF;AH;BC;BD;BE;BEH;BF;BG;BI;CD;CE;CEG;CF;CFI;CH;DE;DEF;DG;DH;DI;EF;EG;EH;EI;FG;FH;FI;GH;GHI;HI'
    );
  });

  it.each([
    ['A', 10, 0],
    ['A', 0, 0],
    ['E', 14, 0],
    ['B', 1, 1],
    ['C', 2, 5],
    ['E', 2, 8],
    ['E', 4, 256],
    ['A', 8, 13792],
  ])('test', (start, length, expectedCombinations) => {
    const combinations = calculateCombinations(start, length);
    expect(combinations).toEqual(expectedCombinations);
  });
});
