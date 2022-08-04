import { permutation } from "../src/permutation";
describe("test permutation function", () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    beforeEach(() => {
        consoleSpy.mockClear();
    });
    it("should call recursively for 'Juan'", () => {
        const givenStr = 'Juan';
        const expectedNumberOfCalls = 4 * 3 * 2 * 1;

        permutation(givenStr);

        expect(console.log).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
});