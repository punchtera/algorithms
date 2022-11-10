// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
// [1, 15]

export function rotateMatrix90Degrees(matrix: number[][]): number[][] {
  const translatedLength = matrix.length;

  const translatedMatrix: number[][] = []
  for (let i = 0; i < matrix.length; i++) {
    const element = [];
    for (let j = 0; j < element.length; j++) {
      element.push(0);      
    }
    translatedMatrix.push(element);
  }
  
  console.log("translated default: ", JSON.stringify(translatedMatrix));

  for (let i = 0; i < translatedLength; i++) {
    const columnElement = Number(matrix[0][i]);
    translatedMatrix[i][translatedLength - 1] = Number(columnElement);
  }

  for (let j = 0; j < translatedLength - 1; j++) {
    const columnElement = Number(matrix[j])  
  }

  console.log("translated: ", JSON.stringify(translatedMatrix));
  return translatedMatrix;
}
