import { change } from './solution';

describe('change', function () {
  function testing(s: string, prog: string, version: string, exp: string) {
    console.log(
      'Testing:\n',
      s,
      '\nprog:\n',
      prog,
      '\nversion:\n',
      version,
      '\n'
    );
    let ans = change(s, prog, version);
    console.log('Actual:\n', ans);
    console.log('Expect:\n', exp);
    expect(ans).toEqual(exp);
    console.log('-');
  }
  it('Basic tests1', function () {
    const s1 =
      'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha';
    const s2 =
      'Program title: Balance\nAuthor: Dorries\nCorporation: Funny\nPhone: +1-503-555-0095\nDate: Tues July 19, 2014\nVersion: 6.7\nLevel: Release';
    const s12 =
      'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-009\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha';
    const s13 =
      'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0090\nDate: Tues April 9, 2005\nVersion: 67\nLevel: Alpha';

    const fail =
      'Program title: Platform\nAuthor: Steve\nCorporation: Apple\nPhone: +1-503-555-0092\nDate: Tues April 9, 2005\nVersion: 500\nLevel: Final';

    testing(
      s1,
      'Ladder',
      '1.1',
      'Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1'
    );
    testing(
      s2,
      'Circular',
      '1.5',
      'Program: Circular Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.5'
    );
    testing(s12, 'Ladder', '1.1', 'ERROR: VERSION or PHONE');
    testing(s13, 'Ladder', '1.1', 'ERROR: VERSION or PHONE');
    testing(fail, 'Driver', '2.1', 'ERROR: VERSION or PHONE');
  });
});
