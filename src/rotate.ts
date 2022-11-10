// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
// [1, 15]

export function rotateMatrix90Degrees(matrix: number[][]): number[][] {
  const translatedLength = matrix.length;

  const translatedMatrix: number[][] = [];
  for (let i = 0; i < translatedLength; i++) {
    const element: [] = [];
    translatedMatrix.push(element);
  }

  for (let i = 0; i < translatedLength; i++) {
    const columnElement = Number(matrix[0][i]);
    translatedMatrix[i][translatedLength - 1] = Number(columnElement);
  }

  for (let j = 1; j < translatedLength; j++) {
    const rowElement = Number(matrix[j][translatedLength - 1]);
    translatedMatrix[translatedLength - 1][translatedLength - 1 - j] =
      Number(rowElement);
  }

  for (let k = 1; k < translatedLength; k++) {
    const columnElement = Number(matrix[translatedLength - 1][0]);
    translatedMatrix[0][translatedLength - 1 - k] =
      Number(columnElement);
  }

  console.log("translated: ", JSON.stringify(translatedMatrix));
  return translatedMatrix;
}
