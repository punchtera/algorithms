import { isStringRotated } from "../src/stringRotation";
describe("module to test if a string is a rotation of another one", () => {
  it("should return true as it is a rotation", () => {
    const givenS1 = "erbottlewat";
    const givenS2 = "watterbottle";

    const expectedOutput = true;
    expect(isStringRotated(givenS1, givenS2)).toEqual(expectedOutput);
  });
});
