import {
  isUniqueString,
  isUniqueStringNoAdditional,
} from "../src/isUniqueString";
describe("isUniqueString", () => {
  it("should return 15 for add(10,5)", () => {
    const givenString = "fake";
    expect(isUniqueString(givenString)).toEqual(true);
  });
  it("should return 5 for add(2,3)", () => {
    const givenString = "aaake";
    expect(isUniqueString(givenString)).toEqual(false);
  });
});

describe("isUniqueStringNoAdditional", () => {
  it("should return 15 for add(10,5)", () => {
    const givenString = "fake";
    expect(isUniqueStringNoAdditional(givenString)).toEqual(true);
  });
  it("should return 5 for add(2,3)", () => {
    const givenString = "aaake";
    expect(isUniqueStringNoAdditional(givenString)).toEqual(false);
  });
});
