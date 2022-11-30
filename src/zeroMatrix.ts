// Write an algorithm such that if an element in an M*N matrix is 0
// the entire row and column are set to 0.

export function resetRowColumnIf0(matrix: number[][]): number[][] {
  const rowLength = matrix.length;
  const columnLength = matrix[0]?.length;
  const resetMatrix: number[][] = [];

  for (let i = 0; i < rowLength; i++) {
    resetMatrix[i] = Array(columnLength).fill(0);
  }

  const emptyColumns = new Set<number>();
  for (let i = 0; i < matrix.length; i++) {
    const rowElement = matrix[i];
    for (let j = 0; j < rowElement.length; j++) {
      const element = rowElement[j];
      if (element === 0) {
        resetMatrix[i] = Array(rowElement.length).fill(0);
        emptyColumns.add(j);
        break;
      } else {
        resetMatrix[i][j] = element;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const rowElement = matrix[i];
    for (let j = 0; j < rowElement.length; j++) {
      if (emptyColumns.has(j)) {
        resetMatrix[i][j] = 0;
      }
    }
  }

  return resetMatrix;
}
