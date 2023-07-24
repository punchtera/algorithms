import { LinkedList } from "../../src/linkedList/deleteMiddleNode";

describe("test the linked list implementation and the delete middle node algorith", () => {
  it.skip("should create a linked list", () => {
    const linkedList = new LinkedList(5);

    expect(linkedList.head).toBeTruthy();
  });

  it.skip("should remove the middle test from the linked list and return that node", () => {
    const linkedList = new LinkedList(5);

    linkedList.head?.appendToTail(5);
    linkedList.head?.appendToTail(3);
    linkedList.head?.appendToTail(2);

    const expectedMiddleNodeValue = 5;
    const expectedLength = 3;
    expect(linkedList.deleteMiddleNode().value).toEqual(expectedMiddleNodeValue);
    expect(linkedList.getLength()).toEqual(expectedLength);
  });

  it("should do nothing if the linked list just have 2 elements", () => {
    const linkedList = new LinkedList(5);
    linkedList.head?.appendToTail(3);
    
    const expectedMiddleNodeValue = 5;
    const expectedLength = 2;
    expect(linkedList.deleteMiddleNode().value).toEqual(expectedMiddleNodeValue);
    expect(linkedList.getLength()).toEqual(expectedLength);
  });
});
