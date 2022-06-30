import { calculateFibonacciSequence, calculateFibonacciSequenceRecursively } from "../src/fibonacci";

describe("test calculateFibonacciSequence function", () => {

  it("should return the first 10 elements of the fibonacci sequence", () => {
    expect(calculateFibonacciSequence().length).toEqual(10);
  });

  it("should return the first 10 elements after calling the funcion recursevily", () => {
    // This is the example of the first 10 elements of the fibonacci sequence
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    expect(calculateFibonacciSequenceRecursively().length).toEqual(10)
  })
});