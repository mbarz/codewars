import { comp } from './solution';

function testing(a1: number[] | null, a2: number[] | null, expected: boolean) {
  var s1 = '';
  var s2 = '';
  if (a1 !== null) s1 = a1.toString();
  else s1 = 'null';
  if (a2 !== null) s2 = a2.toString();
  else s2 = 'null';
  const result = comp(a1, a2);
  try {
    expect(result).toBe(expected);
  } catch {
    fail(
      `Error with [${s1}] / [${s2}]. Expected ${expected}, but was ${result}\n`
    );
  }
}

describe('Fixed Tests comp', function () {
  it.each([
    [
      '[121, 144, 19, 161, 19, 144, 19, 11]',
      '[11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]',
      true,
    ],
    [
      '[121, 144, 19, 161, 19, 144, 19, 11]',
      '[11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]',
      false,
    ],
    [
      '[29,78,72,85,17,17,92,29,66,50,22,5,66,53,1,26,38,12,55,31,56,65]',
      '[841,6084,5184,7225,289,289,8464,841,4356,2500,484,25,4356,2809,1,676,1444,144,3025,961,3136,4225]',
      true,
    ],
  ])('Basic tests', function (a, b, c) {
    testing(eval(a), eval(b), c);
  });
});
