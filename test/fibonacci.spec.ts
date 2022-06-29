import { calculateFibonacciSequence } from "../src/fibonacci";
describe("test calculateFibonacciSequence function", () => {
  it("should return the first 10 elements of the fibonacci sequence", () => {
    expect(calculateFibonacciSequence().length).toEqual(10);
  });
});