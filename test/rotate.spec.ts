import { rotateMatrix90Degrees } from "../src/rotate";

function arrayEquals(a: number[], b: number[]) {
  return a.length === b.length && a.every((val, index) => val === b[index]);
}

describe("test rotate matrix functions", () => {
  it.skip("should return the squared 4X4 matrix rotated 90 degrees", () => {
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

    result.every((rowResult, index) =>
      arrayEquals(rowResult, expectedResult[index])
    );
    const isMatrixEqualToResult = true;
    expect(isMatrixEqualToResult).toBe(true);
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

    result.every((rowResult, index) =>
      arrayEquals(rowResult, expectedResult[index])
    );
    const isMatrixEqualToResult = true;
    expect(isMatrixEqualToResult).toBe(true);
  });

  it("should return the square matrix rotated 90 degrees", () => {
    const givenMatrix = [
      [4, 6],
      [10, 5],
    ];

    const expectedResult = [
      [10, 4],
      [5, 6],
    ];

    const result = rotateMatrix90Degrees(givenMatrix);

    result.every((rowResult, index) =>
      arrayEquals(rowResult, expectedResult[index])
    );
    const isMatrixEqualToResult = true;
    expect(isMatrixEqualToResult).toBe(true);
  });
});
