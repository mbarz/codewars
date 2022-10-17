export const likes = (a: string[]): string => {
  const [first, second, third, ...rest] = a;

  if (rest.length) {
    return `${first}, ${second} and ${rest.length + 1} others like this`;
  } else if (third) {
    return `${first}, ${second} and ${third} like this`;
  } else if (second) {
    return `${first} and ${second} like this`;
  } else {
    return `${first || 'no one'} likes this`;
  }
};
