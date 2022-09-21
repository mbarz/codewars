export function rotateLikeAVortex(matrix: number[][]): number[][] {
  const rounds = Math.floor(matrix.length / 2);
  let rotated = matrix.map((r) => [...r]);
  for (let r = 0; r < rounds; r++) {
    rotated = rotateLeft(rotated, r);
  }
  return rotated;
}

export function rotateLeft(matrix: number[][], off = 0): any[][] {
  const rotated: any[][] = matrix.map((r) => [...r]);
  for (let row = off; row < matrix.length - off; row++) {
    for (let col = off; col < matrix.length - off; col++) {
      rotated[row][col] = matrix[col][matrix.length - row - 1];
    }
  }
  return rotated;
}
