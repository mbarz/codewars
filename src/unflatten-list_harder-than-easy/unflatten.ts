export function unflatten(arr: any[], depth = 1, direction = 1): any[] {
  if (depth === 0) return arr;

  const res: any[] = [];

  const length = arr.length;
  const copy = [...arr];
  if (direction < 1) copy.reverse();
  for (let index = 0; index < length; ) {
    const x = copy[index];
    const remainder = x % (copy.length - index);
    if (typeof x !== 'number') {
      res.push(unflatten(x, 1, direction));
      index++;
    } else if (remainder < 3) {
      res.push(x);
      index++;
    } else {
      const slice = copy.slice(index, index + remainder);
      if (direction < 0) slice.reverse();
      res.push(slice);
      index += remainder;
    }
  }
  if (direction < 0) res.reverse();
  return unflatten(res, depth - 1, direction * -1);
}
