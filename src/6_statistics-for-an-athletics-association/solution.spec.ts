import { stat, parseTime, printTime } from './solution';
import { assert } from '../util/assert';

function dotest(strg: string, expected: string) {
  assert.equal(stat(strg), expected);
}
export const isTriangle = (a: number, b: number, c: number) =>
  Math.min(a, b, c) > 0 && a + b + c - 2 * Math.max(a, b, c) > 0;

describe('Fixed Tests', function () {
  it('should parse time', () => {
    expect(parseTime('00|00|01')).toEqual(1);
    expect(parseTime('00|01|00')).toEqual(60);
    expect(parseTime('01|00|00')).toEqual(3600);
    expect(parseTime('01|01|01')).toEqual(3600 + 60 + 1);
    expect(parseTime('01|15|59')).toEqual(3600 * 1 + 60 * 15 + 59);
  });

  it('should parse time', () => {
    expect(printTime(1)).toEqual('00|00|01');
    expect(printTime(60)).toEqual('00|01|00');
    expect(printTime(3600)).toEqual('01|00|00');
    expect(printTime(3600 + 60 + 1)).toEqual('01|01|01');
    expect(printTime(3600 * 1 + 60 * 15 + 59)).toEqual('01|15|59');
  });

  it.each([
    ['00|00|30, 00|00|50, 00|00|40', 'Median: 00|00|40'],
    ['00|00|50, 00|00|30, 00|00|40, 00|00|60', 'Median: 00|00|45'],
    ['01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17', 'Range: 01|01|18'],
    ['01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17', 'Average: 01|38|05'],
    ['01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17', 'Median: 01|32|34'],
    [
      '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41',
      'Range: 00|31|17',
    ],
    [
      '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41',
      'Average: 02|26|18',
    ],
    [
      '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41',
      'Median: 02|22|00',
    ],
  ])('should calc part correctly', (given, expected) => {
    expect(stat(given)).toContain(expected);
  });

  it('stat', function () {
    dotest(
      '01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17',
      'Range: 01|01|18 Average: 01|38|05 Median: 01|32|34'
    );
    dotest(
      '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41',
      'Range: 00|31|17 Average: 02|26|18 Median: 02|22|00'
    );
    dotest(
      '02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17',
      'Range: 00|31|17 Average: 02|27|10 Median: 02|24|57'
    );
  });
});
