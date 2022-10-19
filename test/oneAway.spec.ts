import { isOneEditAway } from "../src/oneAway";

describe("test oneAway functions", () => {
  it("should return true as there is one removal away", () => {
    const givenFirstString = "pale";
    const givenSecondString = "ple";

    const result = isOneEditAway(givenFirstString, givenSecondString);
    expect(result).toEqual(true);
  });

  it("should return true as there is one insert away", () => {
    const givenFirstString = "pales";
    const givenSecondString = "pale";

    const result = isOneEditAway(givenFirstString, givenSecondString);
    expect(result).toEqual(true);
  });

  it("should return true as there is one replace away", () => {
    const givenFirstString = "pale";
    const givenSecondString = "bale";

    const result = isOneEditAway(givenFirstString, givenSecondString);
    expect(result).toEqual(true);
  });

  it("should return false as there is two operations away (2 replace)", () => {
    const givenFirstString = "pale";
    const givenSecondString = "bake";

    const result = isOneEditAway(givenFirstString, givenSecondString);
    expect(result).toEqual(false);
  });
});
