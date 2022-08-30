import { checkPermutation } from "../src/checkPermutation";
describe("checkPermutation", () => {
    it("should return false for comparing two strings that are not a permutation between them", () => {
        const givenFirstString = "dana";
        const givenSecondString = "juan";
        expect(checkPermutation(givenFirstString, givenSecondString)).toBe(false);
    });
    it("should return true for comparing two strings that are not a permutation between them", () => {
        const givenFirstString = "dana";
        const givenSecondString = "nada";
        expect(checkPermutation(givenFirstString, givenSecondString)).toBe(true);
    });
});