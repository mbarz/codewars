type Arithmetic = {
  sign: string;
  fn: (a: number, b: number) => number;
};

const arithmetics: Arithmetic[] = [
  { sign: '/', fn: (a, b) => a / b },
  { sign: '*', fn: (a, b) => a * b },
  { sign: '+', fn: (a, b) => a + b },
  { sign: '-', fn: (a, b) => a - b },
];

export function calc(expression: string): number {
  let s = expression.replace(/\s/g, '');
  s = resolveSigns(s);
  if (s.match(/^-*[\d.]*$/)) return +s;
  s = resolveBrackets(s);
  s = resolveSigns(s);
  s = resolveArithmetics(s);
  return +s;
}

function resolveArithmetics(given: string) {
  return arithmetics.reduce((s, a) => resolveArithmetic(s, a), given);
}

function resolveArithmetic(s: string, { sign, fn }: Arithmetic) {
  const n = '-{0,1}[\\d.]+';
  const regex = new RegExp(`(${n})\\${sign}(${n})`);
  return replaceWhile(s, {
    condition: (s) => s.match(regex) != null,
    fn: (s) => s.replace(regex, (_, a, b) => String(fn(+a, +b))),
  });
}

function resolveSigns(e: string) {
  return e
    .replace(/--+/g, (a) => (a.length % 2 ? '-' : '+'))
    .replace(/([^\d()])\+/g, '$1');
}

function resolveBrackets(e: string): string {
  return replaceWhile(e, {
    condition: (s) => s.includes('('),
    fn: (s) => resolveNextBracket(s),
  });
}

function replaceWhile(
  given: string,
  props: {
    condition: (s: string) => boolean;
    fn: (s: string) => string;
  }
) {
  let s = given;
  while (props.condition(s)) {
    s = props.fn(s);
  }
  return s;
}

function resolveNextBracket(e: string): string {
  const [start, end] = findBrackets(e);
  const head = e.substring(0, start);
  const sub = e.substring(start + 1, end);
  const tail = e.substring(end + 1);
  return head + calc(sub) + tail;
}

function findBrackets(e: string): [number, number] {
  const end = e.indexOf(')');
  const start = e.substring(0, end).lastIndexOf('(');
  return [start, end];
}
