type Pos = { row: number; col: number };

/**
 * n = 4 일 때,
 *  0  1  2  3
 * 11 12 13  4
 * 10 15 14  5
 *  9  8  7  6
 * 의 달팽이 배열이 나온다.
 */
export function generateSnailPositionArray(n: number): Pos[] {
  const snailPositionArray = new Array(n * n).fill(null);
  const snailIndexArray = new Array(n * n).fill(-1);

  let direction: 'left' | 'right' | 'up' | 'down' = 'right';
  let row = 0;
  let col = 0;

  for (let i = 0; i < n * n; i++) {
    snailPositionArray[i] = { row, col };
    snailIndexArray[row * n + col] = i;
    if (direction === 'right') {
      if (col + 1 < n && snailIndexArray[row * n + col + 1] === -1) {
        col++;
      } else {
        direction = 'down';
        row++;
      }
    } else if (direction === 'down') {
      if (row + 1 < n && snailIndexArray[(row + 1) * n + col] === -1) {
        row++;
      } else {
        direction = 'left';
        col--;
      }
    } else if (direction === 'left') {
      if (col - 1 >= 0 && snailIndexArray[row * n + col - 1] === -1) {
        col--;
      } else {
        direction = 'up';
        row--;
      }
    } else if (direction === 'up') {
      if (row - 1 >= 0 && snailIndexArray[(row - 1) * n + col] === -1) {
        row--;
      } else {
        direction = 'right';
        col++;
      }
    }
  }

  return snailPositionArray;
}
