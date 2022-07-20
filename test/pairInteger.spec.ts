import { calculatePairInteger } from "../src/pairInteger";

describe("test calculateFibonacciSequence function", () => {

  it("should return the first 10 elements of the fibonacci sequence", () => {
    const givenArray = [1, 7, 5, 9, 2, 12, 3];
    const givenDifference = 2;
    const expectedPairIntegerArray = [{ 1: 3 }, { 3: 5 }, { 5: 7 }, { 7: 9 }];

    expect(calculatePairInteger(givenArray, givenDifference).length).toEqual(4);
  });

});