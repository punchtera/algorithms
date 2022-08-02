// print all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3
// whereas a, b, c, d are positive integers between 1, 1000
// bonus: show the difference in time after implementing performant function

import { cubeSumBruteForce, cubeSumOThree } from "../src/cubeSum";

describe("test cubeSum functions", () => {
    // const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    // beforeEach(() => {
    //     consoleSpy.mockClear();
    // });
    // the number of iterations is huge in the brute force so i skip it
    it.skip("call console.log number of times without failure.", () => {
        cubeSumBruteForce();
        expect(console.log).toHaveBeenCalled();
    });

    // beforeEach(() => {
    //     consoleSpy.mockClear();
    // });
    it("should call cubeSum O(N^3)", () => {
        cubeSumOThree();
        // expect(console.log).toHaveBeenCalled();
    });
});