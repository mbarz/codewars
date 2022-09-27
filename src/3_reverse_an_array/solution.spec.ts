import { reverse } from './solution';

const codeSize = getCodeSize();
console.log('<LOG::Code size>', codeSize);

function getCodeSize() {
  return require('fs').statSync(__dirname + '/solution.ts').size;
}

describe('reverse', () => {
  it('should reverse arrays', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverse([...'01234567890123456789'.split('')])).toEqual([
      ...'98765432109876543210'.split(''),
    ]);
    expect(reverse([0, undefined])).toEqual([undefined, 0]);
  });
});

describe('Code', () => {
  it('should be short enough', () => {
    const codeSize = getCodeSize();
    if (codeSize > 47) fail('Code is too long');
  });
});
