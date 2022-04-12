import { getTwoSumIndexes } from "../src/getTwoSumIndexes";

describe("test two sum index function", () => {

    // Ask if the array is sorted.
    // Is there a constraint in memory usage?
    // Is there any constraint at runtime?

    it("should return true as 5 and 2 inside the array sum 7", () => {

        const givenArr = [3, 1, 5, 2, 9]
        const givenTarget = 7

        expect(getTwoSumIndexes(givenArr, givenTarget)).toBe([2, 3]);
    });

    it("should return false as none of the pairs inside the array return 1", () => {

        const givenTarget = 1
        const givenArr = [3, 1, 5, 2, 9]

        expect(getTwoSumIndexes(givenArr, givenTarget)).toBe(false);
    });

    it("should return true as none of the pairs inside the array return 7", () => {

        const givenTarget = 7
        const givenArr = [3, 5, 2, -4, 8, 11]

        expect(getTwoSumIndexes(givenArr, givenTarget)).toBe(true);
    });
});