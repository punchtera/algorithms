import { LinkedList } from "../../src/linkedList/deleteMiddleNode";

describe("test the linked list implementation and the duplication algorith", () => {
  it("should create a linked list", () => {
    const linkedList = new LinkedList(5);

    expect(linkedList.head).toBeTruthy();
  });

  it("should test if the result of removing duplicates from a linkedlist and return true", () => {
    const linkedList = new LinkedList(5);

    linkedList.head?.appendToTail(5);
    linkedList.head?.appendToTail(3);
    linkedList.head?.appendToTail(2);

    const expectedMiddleNodeValue = 2;
    expect(linkedList.deleteMiddleNode().value).toEqual(expectedMiddleNodeValue);
    linkedList.showValues();
    expect(linkedList.getLength()).toEqual(3);
  });
});
