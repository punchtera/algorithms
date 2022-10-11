// method that replaces all the spaces of a string by '%20', one might assume that the string
// has additional space at the end to hold the characters, and that you are given the true length of
// the string

import { urllify } from "../src/urllify";

describe("test urllify functions", () => {
  it("happy path with end spaces", () => {
    const givenUrl = "Mr Jhon Smith     ";
    const givenLength = 13;
    const urlifYUrl = urllify(givenUrl, givenLength);
    expect(urlifYUrl).toEqual("Mr%20Jhon%20Smith");
  });
});
