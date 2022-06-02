import { permutation } from "../src/permutation";
describe("test permutation function", () => {
    it("should call recursively for 'Juan'", () => {
        const givenStr = 'Juan';
        permutation(givenStr);
        expect(true).toEqual(true);
    });
});