import { isPalindromePermutation } from "../src/palindrome";

describe("test palindrome functions", () => {
  it("should check if the test string matches", () => {
    const givenStr = "Tact coa";

    const isValid = isPalindromePermutation(givenStr);

    expect(isValid).toEqual(true);
  });
});
