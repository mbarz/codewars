export const comp = (a1: number[] | null, a2: number[] | null): boolean =>
  !!a1 &&
  !!a2 &&
  String([...a1].map((n) => n * n).sort()) === String([...a2].sort());
