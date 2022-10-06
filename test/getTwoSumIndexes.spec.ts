import { getTwoSumIndexes } from "../src/getTwoSumIndexes";

describe("test two sum index function", () => {
  it("should return [2, 3] for 5 & 2", () => {
    const givenArr = [3, 1, 5, 2, 9];
    const givenTarget = 7;

    const res = getTwoSumIndexes(givenArr, givenTarget);
    console.log("res", res);

    expect(res).toEqual([[2, 3]]);
  });

  it("should return [] as none of the pairs inside the array return 1", () => {
    const givenTarget = 1;
    const givenArr = [3, 1, 5, 2, 9];

    expect(getTwoSumIndexes(givenArr, givenTarget)).toEqual([]);
  });

  it("should return [[1, 2], [3, 5]] as there are two pairs that meet the criteria", () => {
    const givenTarget = 7;
    const givenArr = [3, 5, 2, -4, 8, 11];

    expect(getTwoSumIndexes(givenArr, givenTarget)).toEqual([
      [1, 2],
      [3, 5],
    ]);
  });
});
