// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
// [1, 15]

export function rotateMatrix90Degrees(matrix: number[][]): number[][] {
  const translatedLength = matrix.length;
  let elementCount = 0;
  const numberOfElements = translatedLength * translatedLength;

  const translatedMatrix: number[][] = [];
  for (let i = 0; i < translatedLength; i++) {
    const element: [] = [];
    translatedMatrix.push(element);
  }

  for (let i = 0; i < translatedLength; i++) {
    const columnElement = Number(matrix[0][i]);
    translatedMatrix[i][translatedLength - 1] = Number(columnElement);
    elementCount += 1;
  }

  for (let j = 1; j < translatedLength; j++) {
    const rowElement = Number(matrix[j][translatedLength - 1]);
    translatedMatrix[translatedLength - 1][translatedLength - 1 - j] =
      Number(rowElement);
    elementCount += 1;
  }

  for (let k = translatedLength - 2; k >= 0; k--) {
    const columnElement = Number(matrix[translatedLength - 1][k]);
    translatedMatrix[k][0] = Number(columnElement);
    elementCount += 1;
  }

  // if the number of elements have been translated there is no need
  // of iterating more
  if (elementCount === numberOfElements) {
    return translatedMatrix;
  }

  for (let m = translatedLength - 2; m >= 1; m--) {
    const rowElement = Number(matrix[m][0]);
    translatedMatrix[0][m] = Number(rowElement);
  }

  // After rotating the edges check if the count is complete, if not
  // prepare submatrix and call recursevely
  if (numberOfElements - elementCount - 1 === 1) {
    translatedMatrix[1][1] = matrix[1][1];
  }

  console.log('1', translatedMatrix);
  return translatedMatrix;
}
