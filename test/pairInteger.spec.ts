import { calculatePairInteger } from "../src/pairInteger";

describe("test calculatePairInteger function", () => {

  it("should return the elements where their difference is equal to the given param", () => {
    const givenArray = [1, 7, 5, 9, 2, 12, 3];
    const givenDifference = 2;
    const expectedPairIntegerArray = [{ 1: 3 }, { 3: 5 }, { 5: 7 }, { 7: 9 }];

    expect(calculatePairInteger(givenArray, givenDifference).length)
      .toEqual(expectedPairIntegerArray.length);
  });

});