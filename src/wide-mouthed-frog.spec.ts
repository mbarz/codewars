export const mouthSize2 = (animal: string, t: string = 'alligator') =>
  Array.from({ length: parseInt(t.replace(/./g, '1'), 2) + 1 }, (_, i) => i)
    .map((pattern) =>
      Array.from(t).map((c, i) =>
        pattern & (1 << i) ? String.fromCharCode(c.charCodeAt(0) - 0x20) : c
      )
    )
    .reduce((a, b) => ({ ...a, [b.join('')]: 'small' }), { [animal]: 'wide' })[
    animal
  ];

export const mouthSize = (animal: string): string =>
  /^alligator$/i.test(animal) ? 'small' : 'wide';

describe('WideMoutFrog', () => {
  it('should get all the case variants for "abc"', () => {
    expect(mouthSize('alligator')).toEqual('small');
    expect(mouthSize('ALLigator')).toEqual('small');
    expect(mouthSize('not-an-alligator')).toEqual('wide');
    expect(mouthSize('alligatorlike')).toEqual('wide');
  });
});
