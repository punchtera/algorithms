import { twoSum } from "../src/twoSum";
describe("test add function", () => {
    it("should return true as 5 and 2 inside the array sum 7", () => {

        const givenArr = [3, 1, 5, 2, 9]
        const givenTarget = 7

        expect(twoSum(givenArr, givenTarget)).toBe(true);
    });
    it("should return false as none of the pairs inside the array return 1", () => {

        const givenTarget = 1
        const givenArr = [3, 1, 5, 2, 9]

        expect(twoSum(givenArr, givenTarget)).toBe(false);
    });
});