import { LinkedList } from "../../src/linkedList/partition";

describe("test the linked list implementation and the partition algorith", () => {
  it("should create a linked list", () => {
    const linkedList = new LinkedList(5);

    expect(linkedList.head).toBeTruthy();
  });
});
