export function unflatten(flat: any[]): any[] {
  const res: any[] = [];
  while (flat.length)
    res.push(flat[0] < 3 ? flat.shift() : flat.splice(0, flat[0]));
  return res;
}
