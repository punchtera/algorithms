import { compressString } from "../src/stringCompresion";

describe("test stringCompresion functions", () => {
  it("should return a2b1c5a3 as there is a valid compressed string", () => {
    const givenString = "aabcccccaaa";

    const result = compressString(givenString);
    expect(result).toEqual("a2b1c5a3");
  });
});
