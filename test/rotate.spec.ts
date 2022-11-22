import { rotateMatrix90Degrees } from "../src/rotate";

function arrayEquals(a: number[], b: number[]) {
  let isArrayEqual = true;

  if (a.length !== b.length) {
    return false;
  }

  a.forEach((val, index) => {
    console.log("val", val);
    if (val !== b[index]) {
      isArrayEqual = false;
    }
  });

  return isArrayEqual;
}

function isMatrixEqual(matrix: number[][], givenMatrix: number[][]): Boolean {
  let isMatrixEqual = true;
  matrix.forEach((rowResult, index) => {
    console.log("rowResult", rowResult);
    console.log("rowResultPair", givenMatrix[index]);
    const isArrayEqual = arrayEquals(rowResult, givenMatrix[index]);
    console.log("isArrayEqual", isArrayEqual);
    if (isArrayEqual === false) {
      isMatrixEqual = false;
    }
  });
  return isMatrixEqual;
}

describe("test rotate matrix functions", () => {
  it("should return the squared 4X4 matrix rotated 90 degrees", () => {
    const givenMatrix = [
      [8, 3, 2, 4],
      [5, 8, 6, 1],
      [10, 9, 4, 2],
      [1, 3, 5, 7],
    ];

    const expectedResult = [
      [1, 10, 5, 8],
      [3, 9, 8, 3],
      [5, 4, 6, 2],
      [7, 2, 1, 4],
    ];

    const result = rotateMatrix90Degrees(givenMatrix);

    const isThisMatrixEqual = isMatrixEqual(result, expectedResult);
    expect(isThisMatrixEqual).toBe(true);
  });

  it.skip("should return the matrix rotated 90 degrees", () => {
    const givenMatrix = [
      [8, 3, 2],
      [10, 4, 1],
      [13, 11, 6],
    ];

    const expectedResult = [
      [13, 10, 8],
      [11, 4, 3],
      [6, 1, 2],
    ];

    const result = rotateMatrix90Degrees(givenMatrix);

    const isThisMatrixEqual = isMatrixEqual(result, expectedResult);
    expect(isThisMatrixEqual).toBe(true);
  });

  it.skip("should return the square matrix rotated 90 degrees", () => {
    const givenMatrix = [
      [4, 6],
      [10, 5],
    ];

    const expectedResult = [
      [10, 4],
      [5, 6],
    ];

    const result = rotateMatrix90Degrees(givenMatrix);
    const isThisMatrixEqual = isMatrixEqual(result, expectedResult);

    expect(isThisMatrixEqual).toBe(true);
  });
});
