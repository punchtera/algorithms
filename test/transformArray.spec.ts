import { transformArray } from "../src/transformArray";
describe("transform array function", () => {
  it("should return the expected value", () => {
    const givenString = "aaaabbbcca";
    const expectedOutput = [{ a: 4 }, { b: 3 }, { c: 2 }, { a: 1 }];
    expect(transformArray(givenString)).toEqual(expectedOutput);
  });
});
