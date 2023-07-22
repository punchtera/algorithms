import { LinkedList } from "../../src/linkedList/deleteMiddleNode";

describe("test the linked list implementation and the delete middle node algorith", () => {
  it("should create a linked list", () => {
    const linkedList = new LinkedList(5);

    expect(linkedList.head).toBeTruthy();
  });

  it("should remove the middle test from the linked list and return that node", () => {
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
