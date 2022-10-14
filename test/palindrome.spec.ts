import { isPalindromePermutation } from "../src/palindrome";

describe("test palindrome functions", () => {
  it("should return true as the test is a valid palindrome candidate", () => {
    const givenStr = "Tact coa";

    const isValid = isPalindromePermutation(givenStr);

    expect(isValid).toEqual(true);
  });

  it("should return true as the test is a valid palindrome candidate with no odd chars", () => {
    const givenStr = "Tact ca";

    const isValid = isPalindromePermutation(givenStr);

    expect(isValid).toEqual(true);
  });

  it("should return false as the test is not a valid palindrome candidate", () => {
    const givenStr = "Tact xcoa";

    const isValid = isPalindromePermutation(givenStr);

    expect(isValid).toEqual(false);
  });
});
