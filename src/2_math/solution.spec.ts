import { calc } from './solution';

var tests: [string, number][] = [
  ['', 0],
  ['--5', 5],
  ['---5', -5],
  ['----5', 5],
  ['1+1', 2],
  ['1 - 1', 0],
  ['3 ----- 1', 2],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732],
  ['12*-1', -12],
  ['12* 123/-(-5 + 2)', 492],
  ['(1 - 2) + -(-(-(-4)))', 3],
  [
    '(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) ',
    1,
  ],

];

describe('calc', function () {
  tests.forEach(([given, expected]) => {
    // const expected = eval(given);
    it(`should evaluate ${given} to ${expected}`, () => {
      var x = calc(given);
      try {
        expect(x).toEqual(expected);
      } catch {
        throw 'Expected: "' + given + '" to be ' + expected + ' but got ' + x;
      }
    });
  });
});
