import { commonSubstring } from "../src/commonSubstring";

describe("test commonSubstring function", () => {
  it("should return 4 as a result from 'GORI' length", () => {
    const a = "ALGORITHM";
    const b = "PLÅGORIS";

    const expectedCommonSubstring = "GORI";
    expect(commonSubstring(a, b)).toBe(expectedCommonSubstring.length);
  });
});
