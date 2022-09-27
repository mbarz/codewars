const COUNT_OF_LETTERS = 9;
const CONNECTED = ['ABC', 'DEF', 'GHI', 'ADG', 'BEH', 'CFI', 'AEI', 'CEG'];
const ROUTES = allRoutes();

export function calculateCombinations(
  startPosition: string,
  patternLength: number,
  used: string[] = []
): number {
  if (patternLength > COUNT_OF_LETTERS || patternLength < 1) return 0;
  if (patternLength === 1) return 1;
  return ROUTES.filter((s) => s.includes(startPosition))
    .map((s) =>
      s.replace(new RegExp(`[${startPosition}${used.join('')}]`, 'g'), '')
    )
    .filter((s) => s.length === 1)
    .filter((s, i, arr) => arr.indexOf(s) === i)
    .map((o) =>
      calculateCombinations(o, patternLength - 1, [startPosition, ...used])
    )
    .reduce((a, b) => a + b, 0);
}

export function allRoutes() {
  const chars = Array.from({ length: COUNT_OF_LETTERS }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const indirect = CONNECTED.map((c) => c[0] + c[2]);
  return [
    ...chars
      .map((a, i) =>
        chars
          .filter((b) => !chars.slice(0, i + 1).includes(b))
          .map((b) => `${a}${b}`)
      )
      .reduce((a, b) => [...a, ...b], [])
      .filter((pair) => !indirect.includes(pair)),
    ...CONNECTED,
  ];
}
