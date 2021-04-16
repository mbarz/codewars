namespace solution {
  export class G964 {
    public static rank(st: string, weights: number[], n: number): string {
      const names = st.split(',');
      if (!st || names.length < 1) {
        return 'No participants';
      }
      const ranked = names.map((name, i) => ({
        name,
        wn: som(name) * weights[i],
      }));
      ranked.sort((a, b) => b.wn - a.wn || a.name.localeCompare(b.name));
      return ranked[n - 1]?.name || 'Not enough participants';
    }
  }

  export function som(name: string): number {
    const baseCharCode = 'A'.charCodeAt(0) - 1;
    const chars = name.toUpperCase().split('');
    const ranks = chars.map((c) => c.charCodeAt(0) - baseCharCode);
    return ranks.reduce((a, b) => a + b, name.length);
  }
}

describe('Fixed Tests', function () {
  it.each([
    ['a', 2],
    ['b', 3],
    ['aa', 4],
    ['ab', 5],
    ['Ab', 5],
  ])('should get som for %s', (name, som) => {
    expect(solution.som(name)).toEqual(som);
  });

  it.each([
    [
      {
        st: 'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
        weights: [4, 2, 1, 4, 3, 1, 2],
        n: 4,
        e: 'Benjamin',
      },
    ],
    [
      {
        st: 'Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden',
        weights: [1, 3, 5, 5, 3, 6],
        n: 2,
        e: 'Matthew',
      },
    ],
    [
      {
        st: 'Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth',
        weights: [3, 1, 4, 4, 3, 2],
        n: 4,
        e: 'Abigail',
      },
    ],
    [{ st: 'Lagon,Lily', weights: [1, 5], n: 2, e: 'Lagon' }],
    [
      {
        st: 'Elijah,Michael,Avery,Sophia,Samantha',
        weights: [2, 1, 5, 2, 2],
        n: 3,
        e: 'Sophia',
      },
    ],
    [
      {
        st: 'William,Willaim,Olivia,Olivai,Lily,Lyli',
        weights: [1, 1, 1, 1, 1, 1],
        n: 1,
        e: 'Willaim',
      },
    ],
    [
      {
        st: '',
        weights: [4, 2, 1, 4, 3, 1, 2],
        n: 8,
        e: 'No participants',
      },
    ],
    [
      {
        st: 'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
        weights: [4, 2, 1, 4, 3, 1, 2],
        n: 8,
        e: 'Not enough participants',
      },
    ],
  ])(
    'Basic tests rank',
    function ({
      st,
      weights,
      n,
      e,
    }: {
      st: string;
      weights: number[];
      n: number;
      e: string;
    }) {
      expect(solution.G964.rank(st, weights, n)).toEqual(e);
    }
  );
});
