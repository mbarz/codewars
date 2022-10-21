export function stat(strg: string): string {
  const times = parseTimes(strg);
  const statistics = calcStat(times);
  return printStatistics(statistics);
}

function parseTimes(s: string) {
  return s.split(', ').map((t) => parseTime(t));
}

export function parseTime(s: string): number {
  return s
    .split('|')
    .reverse()
    .map((p) => Number(p))
    .map((n, i) => n * Math.pow(60, i))
    .reduce((a, b) => a + b, 0);
}

function calcStat(times: number[]): Record<string, number> {
  return {
    Range: range(times),
    Average: average(times),
    Median: median(times),
  };
}

function range(arr: number[]) {
  return Math.max(...arr) - Math.min(...arr);
}

function average(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function median(arr: number[]): number {
  const copy = [...arr];
  copy.sort((a, b) => a - b);
  const mid = copy.slice(
    Math.floor((arr.length - 1) / 2),
    Math.ceil((arr.length + 1) / 2)
  );
  return average(mid);
}

function printStatistics(stats: Record<string, number>): string {
  return Object.entries(stats)
    .map(([name, value]) => `${name}: ${printTime(value)}`)
    .join(' ');
}

export function printTime(t: number): string {
  return ['m', 'h']
    .reduce(([n, ...rest]) => [n / 60, n % 60, ...rest], [t])
    .map((n) => Math.floor(n))
    .map((p) => String(p).padStart(2, '0'))
    .join('|');
}
