import { resetRowColumnIf0 } from "../src/zeroMatrix";

function arrayEquals(a: number[], b: number[]) {
  let isArrayEqual = true;

  if (a.length !== b.length) {
    return false;
  }

  for (let index = 0; index < a.length; index++) {
    const val = a[index];
    if (val !== b[index]) {
      isArrayEqual = false;
    }
  }

  return isArrayEqual;
}

function isMatrixEqual(matrix: number[][], givenMatrix: number[][]): Boolean {
  let isMatrixEqual = true;
  matrix.forEach((rowResult, index) => {
    const isArrayEqual = arrayEquals(rowResult, givenMatrix[index]);
    if (isArrayEqual === false) {
      isMatrixEqual = false;
    }
  });
  return isMatrixEqual;
}

describe("test rotate matrix functions", () => {
  it("should return the squared 4X4 matrix with reset values", () => {
    const givenMatrix = [
      [8, 3, 2, 4],
      [5, 8, 6, 1],
      [10, 9, 0, 2],
      [1, 3, 5, 7],
    ];

    const expectedResult = [
      [8, 3, 0, 4],
      [5, 8, 0, 1],
      [0, 0, 0, 0],
      [1, 3, 0, 7],
    ];

    const result = resetRowColumnIf0(givenMatrix);

    const isThisMatrixEqual = isMatrixEqual(result, expectedResult);
    expect(isThisMatrixEqual).toBe(true);
  });

  it("should return the squared 4X5 matrix with reset values", () => {
    const givenMatrix = [
      [8, 3, 2, 4, 5],
      [5, 8, 6, 1, 0],
      [10, 9, 0, 3, 1],
      [1, 3, 5, 5, 1],
    ];

    const expectedResult = [
      [8, 3, 0, 4, 0],
      [5, 8, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [1, 3, 0, 5, 0],
    ];

    const result = resetRowColumnIf0(givenMatrix);

    const isThisMatrixEqual = isMatrixEqual(result, expectedResult);
    expect(isThisMatrixEqual).toBe(true);
  });

  it("should return the matrix the same", () => {
    const givenMatrix = [
      [8, 3, 2],
      [10, 4, 1],
      [13, 11, 6],
    ];

    const expectedResult = [
      [8, 3, 2],
      [10, 4, 1],
      [13, 11, 6],
    ];

    const result = resetRowColumnIf0(givenMatrix);

    const isThisMatrixEqual = isMatrixEqual(result, expectedResult);
    expect(isThisMatrixEqual).toBe(true);
  });
});
