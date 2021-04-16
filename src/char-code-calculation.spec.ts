function total1(s: string): number {
  return parseInt(
    s
      .split('')
      .map((s) => s.charCodeAt(0))
      .join('')
  );
}

describe('total1', () => {
  it.each([
    ['ABC', 656667],
    ['FM', 7077],
    ['abc', 979899],
  ])('should join char codes', (given, expected) => {
    expect(total1(given)).toEqual(expected);
  });
});

function total2(s: string): number {
  return Number(String(total1(s)).replace(/7/g, '1'));
}

describe('total2', () => {
  it.each([
    ['ABC', 656661],
    ['FM', 1011],
    ['abc', 919899],
    ['abcdef', 919899100101102],
  ])('should return total1 with replaced 7', (given, expected) => {
    expect(total2(given)).toEqual(expected);
  });
});

function sumOfDigetsOf(n: number): number {
  return String(n)
    .split('')
    .reduce((a, b) => a + Number(b), 0);
}

describe('sum of digits', () => {
  it.each([
    [123, 6],
    [1234, 10],
    [total1('ABC'), 36],
    [total2('ABC'), 30],
  ])('should sum digits', (given, expected) => {
    expect(sumOfDigetsOf(given)).toEqual(expected);
  });
});

// should be diff of the sum of digits of total1 and total2
export const calcRef = (str: string) =>
  sumOfDigetsOf(total1(str)) - sumOfDigetsOf(total2(str));

export const calc = (str: string): number =>
  6 *
  str.replace(/(.)/g, (s) => `${s.charCodeAt(0)}`).replace(/[^7]/g, '').length;

describe('diff', () => {
  it.each([
    ['A', calcRef('A')],
    ['ABC', calcRef('ABC')],
    ['FM', calcRef('FM')],
    ['abc', calcRef('abc')],
    ['abcdef', calcRef('abcdef')],
  ])('should transform %s into %s', (given, expected) => {
    expect(calc(given)).toEqual(expected);
  });
});
