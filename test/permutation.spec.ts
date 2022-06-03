import { permutation } from "../src/permutation";
describe("test permutation function", () => {
    it("should call recursively for 'Juan'", () => {
        const givenStr = 'Juan';
        const expectedNumberOfCalls = 4*3*2*1;
        console.log = jest.fn();

        permutation(givenStr);

        expect(console.log).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
});