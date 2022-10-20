export class Node {
  static counter = 0;
  name = String.fromCharCode(65 + Node.counter++);
  next?: Node;
  setNext(node: Node) {
    this.next = node;
  }
}

export function loop_size(node: Node) {
  const path = [node];
  while (path[0].next && !path.includes(path[0].next as any))
    path.unshift(path[0].next as any);
  return path.indexOf(path[0].next as any) + 1;
}
