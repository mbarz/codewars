import { Node, loop_size } from './solution';

describe('sample tests', function () {
  beforeEach(() => (Node.counter = 0));

  it.each([
    ['A=>A', 1],
    ['A=>B=>A', 2],
    ['A=>B=>B', 1],
    ['A=>B=>C=>C', 1],
    ['A=>B=>C=>B', 2],
    ['A=>B=>C=>A', 3],
    ['A=>B=>C=>1=>2=>3=>4=>5=>6=>7=>8=>9=>10=>11=>12=>1', 12],
  ])('should work for %s', (s, n) => {
    expect(loop_size(build(s))).toEqual(n);
  });
});

function build(s: string): Node {
  const map: Record<string, Node> = {};
  const nodes = s.split('=>');
  nodes.forEach((n) => {
    if (!map[n]) map[n] = new Node();
  });
  for (let i = 0; i < nodes.length - 1; i++) {
    map[nodes[i]]?.setNext(map[nodes[i + 1]]);
  }
  return map[nodes[0]];
}
