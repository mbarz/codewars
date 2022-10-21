export function cakes(
  recipe: Record<string, number>,
  available: Record<string, number>
): number {
  const amounts = Object.entries(recipe).map(
    ([ingredient, needed]) => available[ingredient] / needed || 0
  );
  return Math.floor(Math.min(...amounts));
}
